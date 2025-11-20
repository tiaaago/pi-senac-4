package com.studybuddy.studybuddy_api.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studybuddy.studybuddy_api.models.Groups;

public interface GroupsRepository extends JpaRepository<Groups, UUID>{

    
}
