package com.studybuddy.studybuddy_api.repositories;

import com.studybuddy.studybuddy_api.models.Groups;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public class GroupsRepository extends JpaRepository<Groups, UUID>{

    
}
