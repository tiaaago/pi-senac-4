package com.studybuddy.studybuddy_api.dto;

import com.studybuddy.studybuddy_api.models.User;
import lombok.Getter;

@Getter
public class UserDTO {
    private String nome;
    private String email;
    private String curso;
    private int semestre;
    private int xp;

    public UserDTO(User user) {
        this.nome = user.getNome();
        this.email = user.getEmail();
        this.curso = user.getCurso();
        this.semestre = user.getSemestre();
        this.xp = user.getXp();
    }
}