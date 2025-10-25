package com.studybuddy.studybuddy_api;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudybuddyApiApplication {

    @Value("${spring.datasource.url}")
    private String dbUrl;

    @Value("${spring.datasource.username:sa}")
    private String dbUser;

    @Value("${spring.datasource.driver-class-name}")
    private String driver;

    public static void main(String[] args) {
        SpringApplication.run(StudybuddyApiApplication.class, args);
    }

    @PostConstruct
    public void logDatabaseConfig() {
        System.out.println("🔍 Tipo de driver: " + driver);
        System.out.println("🔍 URL do banco: " + dbUrl);
        System.out.println("🔍 Usuário: " + dbUser);
    }
}