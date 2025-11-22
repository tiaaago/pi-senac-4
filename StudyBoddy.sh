
#!/usr/bin/env bash

# -----------------------------
# Caminhos relativos ao script
# -----------------------------
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PASTA_A="$SCRIPT_DIR/backend/api_versao_local/target"
PASTA_B="$SCRIPT_DIR/frontend"

# -----------------------------
# 1️⃣ Verificar Java 21
# -----------------------------
echo "Verificando Java 21..."
JAVA_VERSION=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}')

if [[ ! $JAVA_VERSION == 21* ]]; then
    echo "ERRO: Java 21 não encontrado."
    exit 1
fi

echo "Java 21 encontrado."

# -----------------------------
# 1.1️⃣ Executar Backend
# -----------------------------
echo "Buscando arquivo JAR em $PASTA_A..."

cd "$PASTA_A" || { echo "ERRO: Pasta do backend não encontrada."; exit 1; }

JAR_FILE=$(ls *.jar 2>/dev/null | head -n 1)

if [[ -z "$JAR_FILE" ]]; then
    echo "ERRO: Nenhum JAR encontrado em $PASTA_A"
    exit 1
fi

echo "Executando backend: $JAR_FILE"
java -jar "$JAR_FILE" &

BACKEND_PID=$!
echo "Backend iniciado com PID $BACKEND_PID"
sleep 2

# -----------------------------
# 2️⃣ Verificar npm e iniciar frontend
# -----------------------------
echo "Verificando npm..."
if ! command -v npm >/dev/null; then
    echo "ERRO: npm não encontrado."
    exit 1
fi

echo "npm encontrado."

cd "$PASTA_B" || { echo "ERRO: Pasta frontend não encontrada."; exit 1; }

npm install || { echo "ERRO no npm install"; exit 1; }

npm run dev &
FRONTEND_PID=$!
echo "Frontend iniciado com PID $FRONTEND_PID"

# -----------------------------
# 3️⃣ Esperar frontend subir e abrir navegador
# -----------------------------
echo "Aguardando frontend iniciar porta 3000..."
while ! nc -z localhost 3000; do
    sleep 1
done

echo "Abrindo navegador..."
xdg-open http://localhost:3000 2>/dev/null || open http://localhost:3000

wait $BACKEND_PID
wait $FRONTEND_PID
