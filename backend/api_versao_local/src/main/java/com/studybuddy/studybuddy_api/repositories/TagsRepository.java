package com.studybuddy.studybuddy_api.repositories;

import com.studybuddy.studybuddy_api.models.Tags;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface TagsRepository extends JpaRepository<Tags, UUID> {
    List<Tags> findByUserId(UUID userId);
    List<Tags> findByUserEmail(String email);
}
