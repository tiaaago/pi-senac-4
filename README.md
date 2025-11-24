# StudyBuddy - Plataforma Colaborativa de Estudos 👥📚
![alt text](/docs/assets/screenshots/image-1.png)

## 📖 Sobre o Projeto

O **StudyBuddy** é uma plataforma inovadora que conecta estudantes para formação de grupos de estudo colaborativos. A aplicação permite que usuários encontrem parceiros de estudo ideais baseados em suas preferências, matérias e métodos de estudo preferidos.

### 🎯 Funcionalidades Principais

- **👤 Gestão de Usuários** - Cadastro, login e perfil personalizado
- **👥 Grupos de Estudo** - Criação e gestão de grupos colaborativos
- **🏷️ Preferências de Estudo** - Tags personalizadas (Pomodoro, Mapas Mentais, etc.)
- **🛡️ Sistema de Conquistas** - Badges por progresso e participação
- **🔍 Match Inteligente** - Encontre grupos e parceiros compatíveis

## 🛠️ Tecnologias Utilizadas

### Backend
- **Java 21** + **Spring Boot 3.5.6**
- **Spring Data JPA** - Persistência de dados
- **H2 Database** - Banco de dados em memória (desenvolvimento)
- **Spring Security** - Autenticação e autorização
- **Maven** - Gerenciamento de dependências
- **SpringDoc OpenAPI 2.8.13** - Documentação interativa da API
- **Lombok** - Redução de boilerplate code

### Frontend
- **React** + **Next.js** - Framework web
- **Tailwind CSS** - Estilização
- **Axios** - Cliente HTTP


## 🚀 Começando

### Pré-requisitos
- Java 21 ou superior
- Node.js 18 ou superior (apenas para frontend/mobile)
- Maven 3.6+

## 🔧 Instalação e Execução

### Backend (Spring Boot)
```bash
# Clone o repositório
git clone https://github.com/tiaaago/pi-senac-4.git
cd pi-senac-4/backend/api_versao_local

# Execute a aplicação (H2 será iniciado automaticamente)
mvn spring-boot:run

# Ou no Windows:
.\mvnw spring-boot:run
```

#### URLs do Backend
- 🔗 API: http://localhost:8080

- 📚 Swagger UI: http://localhost:8080/swagger-ui/index.html

- 🗄️ H2 Console: http://localhost:8080/h2-console

- ❤️ Health Check: http://localhost:8080/actuator/health


### Frontend (React/Next.js)
```bash
# Navegue até o diretório do frontend
cd frontend

# Instale o React
npm install 

# Execute a aplicação
npm run dev
```

#### URLs do Frontend
- 🔗 Aplicação Web: http://localhost:3000


## 📊 Acessando o Banco H2
Para visualizar e gerenciar o banco de dados durante o desenvolvimento:

1. Acesse: http://localhost:8080/h2-console

2. Configurações (preenchidas automaticamente):

    - JDBC URL: jdbc:h2:mem:testdb
    - User Name: sa
    - Password: (deixe em branco)

3. Acessos
- User Name: sa
- Password: (deixe em branco)
- Clique em Connect

💡 **Dica:** O H2 é um banco em memória - os dados são resetados quando a aplicação é reiniciada

## 📚 Documentação da API
A documentação interativa da API está disponível via Swagger UI:

- Acesse: http://localhost:8080/swagger-ui/index.html

## 🚀 Como Usar - Exemplos Práticos
### 🔐 Autenticação
#### Login de Usuário - Request:
```bash
{
  "email": "joao.silva@example.com",
  "password": "senha123"
}
```

#### Login de Usuário - Response:
```bash
{
    "id": "e460536e-5f85-45e0-942f-0b31660c65d1",
    "email": "joao.silva@example.com",
    "nome": "João Silva",
    "senha": "$2a$10$3pTd0xBWJ5Mkoxn2cDey/emL4M6jSxYhCW/znJvsUiCi2xDVseOw6",
    "curso": "Engenharia de Software",
    "semestre": 3,
    "xp": 0,
    "tags": null,
    "badges": {
        "id": "9ffbcd68-6219-4c7f-86cf-42de806b855b",
        "bronze": true,
        "prata": false,
        "ouro": false,
        "diamante": false
    }
```
### 👥 Gerenciamento de Usuários:
#### Criar Usuário - Request:
```bash
{
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "senha": "senha123",
    "curso": "Engenharia de Software",
    "semestre": 3,
    "xp": 0
}
```
#### Criar Usuário - Response:
```bash
{
    "id": "e460536e-5f85-45e0-942f-0b31660c65d1",
    "email": "joao.silva@example.com",
    "nome": "João Silva",
    "senha": "$2a$10$3pTd0xBWJ5Mkoxn2cDey/emL4M6jSxYhCW/znJvsUiCi2xDVseOw6",
    "curso": "Engenharia de Software",
    "semestre": 3,
    "xp": 0,
    "tags": null,
    "badges": null
}
```

## 🧪 Testes Automatizados
### Collection de Testes
- **📁 Collection Local**: [PI-SENAC-4-API.postman_collection.json](./docs/postman/PI-SENAC-4-API.postman_collection.json)
- **🌐 Collection Online**: [Acessar no Postman Cloud](https://dev-t-doido.postman.co/workspace/3fdc408e-a582-429a-87d5-4eb818177c1c/run/38228521-01aa2f75-5d31-4d62-8425-4f7d1c81facd)
- **📊 Resultados dos Testes**: [StudyBuddy - PI SENAC 4.postman_test_run.json](./docs/postman/StudyBuddy%20-%20PI%20SENAC%204.postman_test_run.json)

### 📊 Status dos Testes
- ✅ Taxa de Sucesso: 85% (17/20 testes)

- ⚡ Performance: Todos os endpoints respondem em menos de 200ms

- 📅 Última Execução: 22/11/2025

## ✅ Endpoints Validados com Sucesso
### 🔍 Monitoramento
- GET /actuator/health - Status da API (128ms)
### 👥 Gestão de Usuários
- POST /api/users/login - Autenticação (144ms)

- GET /api/users/{email} - Buscar por email (10ms)

- PUT /api/users/{email} - Atualizar usuário (184ms)

- GET /api/users - Listar todos usuários (18ms)

- GET /api/users/perfil/email/{email} - Perfil completo (28ms)
### 👨‍👩‍👧‍👦 Gestão de Grupos
- GET /api/groups - Listar todos grupos (13ms)

### 🎯  Métricas de Performance
- Tempo Médio de Resposta: 76ms

- Endpoint Mais Rápido: Buscar por Email (10ms)

- Endpoint Mais Lento: Atualizar Usuário (184ms)

- Estabilidade: 100% nos endpoints críticos
### 📷 Captura de Tela - Teste Postman
![alt text](/docs/assets/screenshots/image.png)


## 👥 Equipe de Desenvolvimento

### 🎨 Desenvolvimento Frontend
<div align="center">

| [<img src="docs/assets/team-photos/Tiago Enzo.jpeg" width="80" style="border-radius:50%"><br>[@tiaaago]<br>Tiago Enzo](https://github.com/tiaaago) | [<img src="docs/assets/team-photos/Natiely.png" width="80" style="border-radius:50%"><br>[@NaahSchmitt]<br>Natiely](https://github.com/NaahSchmitt) | [<img src="docs/assets/team-photos/Otavio Amaral.jpeg" width="80" style="border-radius:50%"><br>[@darokyz]<br>Otavio Amaral](https://github.com/darokyz) |
|:---:|:---:|:---:|

</div>

### ⚙️ Desenvolvimento Backend
<div align="center">

| [<img src="docs/assets/team-photos/Ester.jpeg" width="80" style="border-radius:50%"><br>[@EsterHB]<br>Ester Barbosa](https://github.com/EsterHB) | [<img src="docs/assets/team-photos/Thiago.jpg" width="80" style="border-radius:50%"><br>[@thiagolcf]<br>Thiago](https://github.com/thiagolcf) |
|:---:|:---:|

</div>

### 📋 Testes e Documentação
<div align="center">

| [<img src="docs/assets/team-photos/Maria.png" width="80" style="border-radius:50%"><br>[@MariaCaru]<br>Maria Carolina](https://github.com/MariaCaru) |
|:---:|

</div>

### 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
