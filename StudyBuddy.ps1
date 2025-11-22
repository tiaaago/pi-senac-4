# Verifica se o usuário já definiu a policy necessária
$policy = Get-ExecutionPolicy -Scope CurrentUser

if ($policy -ne "RemoteSigned" -and $policy -ne "Unrestricted") {
    Write-Host "❌ Seu PowerShell não permite executar scripts."
    Write-Host "Execute o seguinte comando e tente novamente:"
    Write-Host ""
    Write-Host "   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser"
    Write-Host ""
    Write-Host "Depois feche e abra o PowerShell novamente."
    exit 1
}

Write-Host "✔ ExecutionPolicy ok ($policy). Continuando..."
# Garante que caminhos relativos funcionem
Set-Location -Path $PSScriptRoot

# Write-Host "============================="
# Write-Host "CHECKING JAVA VERSION"
# Write-Host "============================="

# # Captura versão do Java
# $javaOutput = & java -version 2>&1
# if ($LASTEXITCODE -ne 0) {
#     Write-Host "[ERROR] Java not installed." -ForegroundColor Red
#     Read-Host "Press ENTER to exit"
#     exit 1
# }

# $javaVersion = $javaOutput -match '"(\d+)' | Out-Null
# $versionNumber = $Matches[1]

# if ($versionNumber -ne 21) {
#     Write-Host "[ERROR] Java 21 not found." -ForegroundColor Red
#     Read-Host "Press ENTER to exit"
#     exit 1
# }

# Write-Host "Java 21 detected!"
# Write-Host ""

# Caminho do backend
$backendPath = "backend/api_versao_local/target"
Set-Location $backendPath

Write-Host "============================="
Write-Host "INICIANDO O BACKEND"
Write-Host "============================="

# Procura .jar
$jarFile = Get-ChildItem -Filter *.jar | Select-Object -First 1

if (-not $jarFile) {
    Write-Host "[ERROR] No JAR found in $backendPath" -ForegroundColor Red
    Read-Host "Press ENTER to exit"
    exit 1
}

Write-Host "Executando o backend: $($jarFile.Name)"

Start-Process "java" -ArgumentList "-jar `"$($jarFile.FullName)`""

# Volta para o script root
Set-Location $PSScriptRoot

# Write-Host ""
# Write-Host "============================="
# Write-Host "CHECKING NPM"
# Write-Host "============================="

# # Verifica npm
# if (-not (Get-Command "npm" -ErrorAction SilentlyContinue)) {
#     Write-Host "[ERROR] npm not found." -ForegroundColor Red
#     Read-Host "Press ENTER to exit"
#     exit 1
# }

# Write-Host "npm detected!"
# Write-Host ""

# Frontend
$frontendPath = "frontend"
Set-Location $frontendPath

Write-Host "============================="
Write-Host "INICIANDO FRONTEND"
Write-Host "============================="


# Always call npm via node.exe (avoids npm.ps1 issues)
$npm = (Get-Command npm.cmd -ErrorAction SilentlyContinue)

if (-not $npm) {
    Write-Host "[ERROR] npm not found." -ForegroundColor Red
    exit 1
}

# Install deps
& $npm "install"

# Run dev server
Start-Process $npm.Source "run dev"

Write-Host ""
Write-Host "============================="
Write-Host "ABRINDO O NAVEGADOR"
Write-Host "============================="

$sleepSeconds = 30
Write-Host "Esperando $sleepSeconds segundos para abrir o navegador..."
Start-Sleep -Seconds $sleepSeconds

# 100% confiável em Windows
Start-Process "explorer.exe" "http://localhost:3000"

Write-Host "Tudo certo!"
Read-Host "Pressione ENTER para sair."
