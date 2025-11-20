package com.studybuddy.studybuddy_api.dto;

import java.util.List;
import java.util.UUID;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GroupMembersDTO {
    private UUID id;
    private String nome;
    private List<UserDTO> membros;
    private int quantidadeMembros;

    public GroupMembersDTO(UUID id, String nome, List<UserDTO> membros) {
        this.id = id;
        this.nome = nome;
        this.membros = membros;
        this.quantidadeMembros = (membros == null) ? 0 : membros.size();
    }
}
