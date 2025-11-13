package com.studybuddy.studybuddy_api.repositories;

import com.studybuddy.studybuddy_api.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID>{
    Optional<User> findByEmail(String email);
    void deleteByEmail(String email);
}
