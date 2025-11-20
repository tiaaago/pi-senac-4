package com.studybuddy.studybuddy_api.models;


import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "senha", nullable = false)
    private String senha;

    @Column(name = "curso")
    private String curso;

    @Column(name = "semestre")
    private int semestre;

    @Column(name = "xp")
    private int xp;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonManagedReference
    private Tags tags;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonManagedReference
    private Badges badges;
    
    @ManyToMany(mappedBy = "membros")
    @JsonBackReference
    private List<Groups> groups = new ArrayList<>();
}
