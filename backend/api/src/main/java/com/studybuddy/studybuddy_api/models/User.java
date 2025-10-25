package com.studybuddy.studybuddy_api.models;


import jakarta.persistence.*;
import lombok.*;
import org.springframework.boot.autoconfigure.web.WebProperties;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="users")
@Entity
public class User {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "nome")
    private String nome;

    @Column(name = "senha")
    private String senha;

    @Column(name = "curso")
    private String curso;

    @Column(name = "semestre")
    private int semestre;

    @Column(name = "xp")
    private int xp;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Tags tags;


    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Badges badges;

}
