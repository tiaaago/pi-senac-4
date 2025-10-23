package com.studybuddy.studybuddy_api.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {

    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:postgresql://db.fgtwzicaecbfwiblguix.supabase.co:5432/postgres");
        config.setUsername("postgres");
        config.setPassword("LahQaLVgdHpZvUIUkPjgmqSpyxCvowfX");
        config.setDriverClassName("org.postgresql.Driver");
        return new HikariDataSource(config);
    }
}