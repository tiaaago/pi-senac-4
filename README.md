# StudyBuddy - Plataforma Colaborativa de Estudos 👥📚

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
cd pi-senac-4/backend

# Execute a aplicação (H2 será iniciado automaticamente)
mvn spring-boot:run

# Execute o JAR
java -jar
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

## 👥 Equipe de Desenvolvimento
[Colega] - Desenvolvimento Backend/Frontend

[Colega] - Desenvolvimento Frontend/Mobile

[@MariaCaru] - Desenvolvimento Testes e documentação


### 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.