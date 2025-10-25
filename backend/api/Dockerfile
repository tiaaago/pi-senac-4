FROM eclipse-temurin:21-jdk
COPY . .
RUN chmod +x mvnw
RUN ./mvnw clean install -DskipTests
ENTRYPOINT ["java", "-jar", "target/studybuddy-api-0.0.1-SNAPSHOT.jar"]