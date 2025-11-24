import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URISyntaxException;

public class StudyBuddy {

    private static boolean isWindows = System.getProperty("os.name").toLowerCase().contains("windows");

    public static void main(String[] args) {
        try {
            // === ENCONTRAR DIRETÓRIO DO JAR ATUAL ===
            File currentJar = new File(StudyBuddy.class.getProtectionDomain().getCodeSource().getLocation().toURI());
            String baseDir = currentJar.getParent();
            
            System.out.println("=== STUDY BUDDY LAUNCHER ===");
            System.out.println("Sistema Operacional: " + System.getProperty("os.name"));
            System.out.println("Diretório do launcher: " + baseDir);
            
            // === BUSCAR BACKEND JAR ===
            File backendJar = findBackendJar(new File(baseDir));
            if (backendJar == null) {
                System.err.println("ERRO: Backend JAR não encontrado!");
                showDirectoryStructure(new File(baseDir), 0);
                waitForEnter();
                return;
            }
            
            // === BUSCAR FRONTEND DIR ===
            File frontendDir = findFrontendDir(new File(baseDir));
            if (frontendDir == null) {
                System.err.println("ERRO: Diretório frontend não encontrado!");
                showDirectoryStructure(new File(baseDir), 0);
                waitForEnter();
                return;
            }
            
            System.out.println("✓ Backend encontrado: " + backendJar.getAbsolutePath());
            System.out.println("✓ Frontend encontrado: " + frontendDir.getAbsolutePath());
            System.out.println("\nIniciando aplicação...\n");
            
            // === INICIAR APLICAÇÃO ===
            startApplication(backendJar, frontendDir);
            
        } catch (Exception e) {
            e.printStackTrace();
            waitForEnter();
        }
    }
    
    private static void startApplication(File backendJar, File frontendDir) throws Exception {
        // === TEMPOS OTIMIZADOS ===
        int backendCheckInterval = 2000;
        int frontendCheckInterval = 2000;
        int maxBackendWait = 15000;
        int maxFrontendWait = 20000; // Aumentado para Windows

        Process backendProcess = null;
        Process frontendProcess = null;

        try {
            // === 1. BACKEND ===
            System.out.println("1. 🚀 Iniciando backend...");
            ProcessBuilder backend = new ProcessBuilder("java", "-jar", backendJar.getAbsolutePath());
            backend.inheritIO();
            backendProcess = backend.start();

            // Aguardar backend ficar pronto
            System.out.print("   ⏳ Aguardando backend iniciar");
            boolean backendReady = waitForService("http://localhost:8080", backendCheckInterval, maxBackendWait);
            
            if (!backendReady) {
                System.out.println("\n   ⚠️  Backend demorou mais que o esperado, continuando...");
            } else {
                System.out.println("\n   ✅ Backend pronto!");
            }

            // === 2. FRONTEND (npm install) ===
            System.out.println("2. 📦 Instalando dependências do frontend...");
            ProcessBuilder npmInstall = createNpmProcess(frontendDir, "install");
            npmInstall.inheritIO();
            
            boolean installSuccess = executeWithTimeout(npmInstall, 120000); // 2 minutos para npm install no Windows
            
            if (!installSuccess) {
                System.out.println("   ⚠️  npm install demorou muito ou falhou, continuando...");
            } else {
                System.out.println("   ✅ Dependências instaladas!");
            }

            // === 3. FRONTEND (npm run dev) ===
            System.out.println("3. 🎨 Iniciando frontend...");
            
            // Verificar se é React ou Vite para melhor mensagem
            String devScript = detectDevScript(frontendDir);
            System.out.println("   Usando comando: " + devScript);
            
            ProcessBuilder npmRunDev = createNpmProcess(frontendDir, "run", "dev");
            npmRunDev.inheritIO();
            
            // No Windows, precisamos lidar com o processo de forma diferente
            if (isWindows) {
                frontendProcess = startFrontendWindows(npmRunDev, frontendDir);
            } else {
                frontendProcess = npmRunDev.start();
            }

            // Aguardar frontend ficar pronto com mais tempo no Windows
            System.out.print("   ⏳ Aguardando frontend iniciar");
            boolean frontendReady = waitForService("http://localhost:3000", frontendCheckInterval, maxFrontendWait);
            
            if (!frontendReady) {
                System.out.println("\n   ⚠️  Frontend demorou mais que o esperado...");
                // No Windows, tentar verificar em outra porta comum
                if (isWindows) {
                    System.out.println("   🔄 Verificando porta 5173 (Vite comum)...");
                    frontendReady = waitForService("http://localhost:5173", frontendCheckInterval, 5000);
                }
            }
            
            if (frontendReady) {
                System.out.println("\n   ✅ Frontend pronto!");
            } else {
                System.out.println("\n   ⚠️  Frontend pode não estar respondendo, mas continuando...");
            }

            // === 4. Abrir navegador ===
            String url = getFrontendUrl(frontendDir);
            System.out.println("4. 🌐 Abrindo navegador: " + url);
            abrirNavegador(url);

            System.out.println("\n🎉 ✅ Aplicação iniciada com sucesso!");
            System.out.println("📍 Frontend: " + url);
            System.out.println("📍 Backend:  http://localhost:8080");
            System.out.println("📍 API Docs: http://localhost:8080/swagger-ui.html");
            System.out.println("\n⏹️  Pressione Enter para encerrar a aplicação...");
            
            // Manter aberto até usuário pressionar Enter
            System.in.read();
            
        } finally {
            // Encerrar processos gracefuly
            System.out.println("\n🛑 Encerrando aplicação...");
            if (frontendProcess != null) {
                frontendProcess.destroy();
                if (isWindows) {
                    // No Windows, matar processos filhos também
                    killWindowsProcesses();
                }
            }
            if (backendProcess != null) {
                backendProcess.destroy();
            }
            System.out.println("✅ Aplicação encerrada!");
        }
    }

    // Método CORRIGIDO - criar processo npm
    private static ProcessBuilder createNpmProcess(File directory, String... commands) {
        ProcessBuilder pb;
        if (isWindows) {
            // No Windows, usar cmd.exe explicitamente
            String[] winCommands = new String[commands.length + 2];
            winCommands[0] = "cmd.exe";
            winCommands[1] = "/c";
            System.arraycopy(commands, 0, winCommands, 2, commands.length);
            pb = new ProcessBuilder(winCommands);
        } else {
            pb = new ProcessBuilder(commands);
        }
        
        if (directory != null) {
            pb.directory(directory);
        }
        return pb;
    }

    // Método específico para iniciar frontend no Windows
    private static Process startFrontendWindows(ProcessBuilder pb, File frontendDir) throws IOException {
        if (isWindows) {
            // No Windows, usar cmd explicitamente e direcionar output
            ProcessBuilder windowsPb = new ProcessBuilder("cmd.exe", "/c", "npm", "run", "dev");
            windowsPb.directory(frontendDir);
            windowsPb.inheritIO();
            
            // Iniciar e retornar imediatamente, não esperar
            return windowsPb.start();
        } else {
            return pb.start();
        }
    }

    // Detectar script de dev e porta
    private static String detectDevScript(File frontendDir) {
        File packageJson = new File(frontendDir, "package.json");
        if (packageJson.exists()) {
            try {
                BufferedReader reader = new BufferedReader(new FileReader(packageJson));
                String line;
                while ((line = reader.readLine()) != null) {
                    if (line.contains("\"dev\"") || line.contains("'dev'")) {
                        reader.close();
                        return "npm run dev";
                    }
                    if (line.contains("\"start\"") || line.contains("'start'")) {
                        reader.close();
                        return "npm start";
                    }
                }
                reader.close();
            } catch (IOException e) {
                // Ignorar erro
            }
        }
        return "npm run dev";
    }

    // Obter URL do frontend baseado no framework
    private static String getFrontendUrl(File frontendDir) {
        // Verificar se é Vite (porta 5173)
        File viteConfig = new File(frontendDir, "vite.config.js");
        if (viteConfig.exists()) {
            return "http://localhost:5173";
        }
        
        File viteConfigTs = new File(frontendDir, "vite.config.ts");
        if (viteConfigTs.exists()) {
            return "http://localhost:5173";
        }
        
        // Padrão React é 3000
        return "http://localhost:3000";
    }

    // Matar processos no Windows
    private static void killWindowsProcesses() {
        if (!isWindows) return;
        
        try {
            // Matar processos node que possam ter ficado rodando
            Runtime.getRuntime().exec("taskkill /F /IM node.exe");
        } catch (IOException e) {
            // Ignorar erro
        }
    }

    // Verificar se serviço está respondendo
    private static boolean waitForService(String urlString, int checkInterval, int maxWait) {
        long startTime = System.currentTimeMillis();
        int attempts = 0;
        
        while (System.currentTimeMillis() - startTime < maxWait) {
            try {
                URL url = new URL(urlString);
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("GET");
                connection.setConnectTimeout(3000);
                connection.setReadTimeout(3000);
                
                int responseCode = connection.getResponseCode();
                if (responseCode == 200) {
                    return true;
                }
            } catch (Exception e) {
                // Serviço ainda não está respondendo
            }
            
            attempts++;
            System.out.print(".");
            
            try {
                Thread.sleep(checkInterval);
            } catch (InterruptedException ie) {
                Thread.currentThread().interrupt();
                break;
            }
        }
        
        return false;
    }

    // Executar comando com timeout
    private static boolean executeWithTimeout(ProcessBuilder pb, long timeoutMs) {
        try {
            Process process = pb.start();
            
            long startTime = System.currentTimeMillis();
            while (System.currentTimeMillis() - startTime < timeoutMs) {
                try {
                    int exitCode = process.exitValue();
                    return exitCode == 0;
                } catch (IllegalThreadStateException e) {
                    Thread.sleep(1000);
                }
            }
            
            process.destroy();
            return false;
            
        } catch (Exception e) {
            return false;
        }
    }
    
    private static File findBackendJar(File baseDir) {
        String[][] possiblePaths = {
            {"backend", "api_versao_local", "target", "studybuddy-api-0.0.1-SNAPSHOT.jar"},
            {"backend", "target", "studybuddy-api-0.0.1-SNAPSHOT.jar"},
            {"studybuddy-backend.jar"},
            {"backend.jar"},
            {"target", "studybuddy-api-0.0.1-SNAPSHOT.jar"}
        };
        
        File jarFile = findJarRecursive(baseDir, "studybuddy-api", 0);
        if (jarFile != null) return jarFile;
        
        for (String[] pathParts : possiblePaths) {
            File currentDir = baseDir;
            for (String part : pathParts) {
                currentDir = new File(currentDir, part);
            }
            if (currentDir.exists() && currentDir.isFile()) {
                return currentDir;
            }
        }
        
        return null;
    }
    
    private static File findJarRecursive(File dir, String jarName, int depth) {
        if (depth > 3) return null;
        if (!dir.exists() || !dir.isDirectory()) return null;
        
        File[] files = dir.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isFile() && file.getName().toLowerCase().contains(jarName.toLowerCase()) && 
                    file.getName().toLowerCase().endsWith(".jar")) {
                    return file;
                }
                if (file.isDirectory()) {
                    File found = findJarRecursive(file, jarName, depth + 1);
                    if (found != null) return found;
                }
            }
        }
        return null;
    }
    
    private static File findFrontendDir(File baseDir) {
        String[] possibleDirNames = {"frontend", "frontend-app", "web", "app"};
        
        for (String dirName : possibleDirNames) {
            File frontendDir = findDirRecursive(baseDir, dirName, 0);
            if (frontendDir != null) {
                File packageJson = new File(frontendDir, "package.json");
                if (packageJson.exists()) {
                    return frontendDir;
                }
            }
        }
        return null;
    }
    
    private static File findDirRecursive(File dir, String dirName, int depth) {
        if (depth > 3) return null;
        if (!dir.exists() || !dir.isDirectory()) return null;
        
        File[] files = dir.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isDirectory() && file.getName().equalsIgnoreCase(dirName)) {
                    return file;
                }
                if (file.isDirectory()) {
                    File found = findDirRecursive(file, dirName, depth + 1);
                    if (found != null) return found;
                }
            }
        }
        return null;
    }
    
    private static void showDirectoryStructure(File dir, int depth) {
        if (depth == 0) System.out.println("\n=== ESTRUTURA DE DIRETÓRIOS ===");
        if (depth > 3) return;
        
        String indent = "  ".repeat(depth);
        File[] files = dir.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isDirectory()) {
                    System.out.println(indent + "📁 " + file.getName() + "/");
                    showDirectoryStructure(file, depth + 1);
                } else if (file.getName().toLowerCase().endsWith(".jar")) {
                    System.out.println(indent + "🎯 " + file.getName() + " [JAR]");
                } else if (file.getName().equals("package.json")) {
                    System.out.println(indent + "📦 " + file.getName() + " [FRONTEND]");
                }
            }
        }
    }
    
    private static void abrirNavegador(String url) {
        try {
            String os = System.getProperty("os.name").toLowerCase();
            ProcessBuilder pb;

            if (os.contains("windows")) {
                pb = new ProcessBuilder("cmd.exe", "/c", "start", "", "\"" + url + "\"");
            } else if (os.contains("linux")) {
                pb = new ProcessBuilder("xdg-open", url);
            } else if (os.contains("mac")) {
                pb = new ProcessBuilder("open", url);
            } else {
                System.out.println("URL: " + url);
                return;
            }
            
            pb.start();
        } catch (IOException e) {
            System.out.println("URL: " + url);
        }
    }
    
    private static void waitForEnter() {
        System.out.println("\nPressione Enter para sair...");
        try {
            System.in.read();
        } catch (IOException e) {
            // Ignorar
        }
    }
}
