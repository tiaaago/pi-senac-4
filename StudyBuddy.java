import java.io.IOException;

public class StudyBuddy {

    public static void main(String[] args) {
        try {
            // === CAMINHOS ABSOLUTOS ===
            String basePath = new java.io.File("").getAbsolutePath();

            String backendJar = basePath + java.io.File.separator + "backend/api_versao_local/target/studybuddy-api-0.0.1-SNAPSHOT.jar";
            String frontendDir = basePath + java.io.File.separator + "frontend";

            int backendDelayMs = 10_000;
            int frontendDelayMs = 8_000;
            int browserDelayMs = 5_000;

            System.out.println("BASE PATH = " + basePath);
            System.out.println("Frontend dir = " + frontendDir);

            // === 1. BACKEND ===
            System.out.println("Iniciando backend...");
            ProcessBuilder backend = new ProcessBuilder("java", "-jar", backendJar);
            backend.inheritIO();
            backend.start();

            Thread.sleep(backendDelayMs);

            // === 2. FRONTEND (npm install) ===
            System.out.println("Executando npm install...");
            ProcessBuilder npmInstall = new ProcessBuilder("npm", "install");
            npmInstall.directory(new java.io.File(frontendDir));
            npmInstall.inheritIO();
            npmInstall.start().waitFor();

            // === 3. FRONTEND (npm run dev) ===
            System.out.println("Iniciando frontend (npm run dev)...");
            ProcessBuilder npmRunDev = new ProcessBuilder("npm", "run", "dev");
            npmRunDev.directory(new java.io.File(frontendDir));
            npmRunDev.inheritIO();
            npmRunDev.start();

            Thread.sleep(frontendDelayMs);
            Thread.sleep(browserDelayMs);

            // === 4. Abrir navegador ===
            String url = "http://localhost:3000";
            System.out.println("Abrindo navegador: " + url);

            String os = System.getProperty("os.name").toLowerCase();

            if (os.contains("windows")) {
                new ProcessBuilder("cmd.exe", "/c", "start", "", url).start();
            } else if (os.contains("linux")) {
                new ProcessBuilder("xdg-open", url).start();
            } else if (os.contains("mac")) {
                new ProcessBuilder("open", url).start();
            }

            System.out.println("Aplicação iniciada com sucesso!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
