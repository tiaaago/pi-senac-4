package com.studybuddy.studybuddy_api.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Table(name = "badges")
@Data //já inclui setter, getter, tostring etc
@NoArgsConstructor
@AllArgsConstructor
@Builder //facilita a criação de objetos, é so colocar . sem criar objeto

public class Badges {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    private boolean bronze;
    private boolean prata;
    private boolean ouro;
    private boolean diamante;




}
