package com.studybuddy.studybuddy_api.models;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.boot.autoconfigure.web.WebProperties;

import java.util.Set;
import java.util.UUID;

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
    private Integer quantidadeDeMembros;

    @ManytoMany
    @JsonManagedReference
    @JoinTable(
    name = "grupo_membros",
    joinColumns = @JoinColumn(name = "grupo_id"),
    inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> membros = new ArrayList<>();

}
