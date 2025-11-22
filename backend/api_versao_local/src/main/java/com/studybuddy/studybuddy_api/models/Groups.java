package com.studybuddy.studybuddy_api.models;


import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
@Table(name="Grupos")
@Entity

public class Groups {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO) 
    private UUID id;

    @Column(name = "nome", unique = true, nullable = false)
    private String nome;

    @Column(name = "quantida_de_membros", nullable = false)
    private Integer quantidadeDeMembros = 0;

    @ManyToMany
    //@JsonManagedReference
    @JsonIgnore
    @JoinTable(
    name = "grupo_membros",
    joinColumns = @JoinColumn(name = "grupo_id"),
    inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> membros = new ArrayList<>();

}
