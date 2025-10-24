package com.studybuddy.studybuddy_api.dto;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter

public class UserUpdateDTO {
    private String nome;
    private String curso;
    private int semestre;
    private int xp;
}
