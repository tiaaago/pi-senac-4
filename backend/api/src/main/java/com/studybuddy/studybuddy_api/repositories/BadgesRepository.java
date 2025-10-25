package com.studybuddy.studybuddy_api.repositories;

import com.studybuddy.studybuddy_api.models.Badges;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface BadgesRepository extends JpaRepository<Badges, UUID> {
    List<Badges> findByUserId(UUID userId);

    List<Badges> findByUserEmail(String email);
}
