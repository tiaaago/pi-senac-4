package com.studybuddy.studybuddy_api.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.studybuddy.studybuddy_api.dto.GroupMembersDTO;
import com.studybuddy.studybuddy_api.models.Groups;
import com.studybuddy.studybuddy_api.models.User;
import com.studybuddy.studybuddy_api.repositories.UserRepository;

import com.studybuddy.studybuddy_api.repositories.GroupsRepository;
import com.studybuddy.studybuddy_api.services.GroupsService;

@RestController
@RequestMapping("/api/groups")
public class GroupsController {

    @Autowired
    private GroupsService groupsService;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private GroupsRepository groupsRepo;

    // ---------------------------
    // LISTAR TODOS OS GRUPOS
    // ---------------------------
    @GetMapping
    public List<Groups> listar() {
        return groupsService.listar();
    }

    // ---------------------------
    // LISTAR MEMBROS DE UM GRUPO
    // ---------------------------
    @GetMapping("/{id}/membros")
    public GroupMembersDTO listarMembros(@PathVariable UUID id) {
        return groupsService.buscarMembrosPorGrupo(id);
    }

    // ---------------------------
    // ADICIONAR MEMBRO A UM GRUPO
    // ---------------------------
    @PostMapping("/{grupoId}/membros/{userId}")
    public ResponseEntity<?> adicionarMembro(
            @PathVariable UUID grupoId,
            @PathVariable UUID userId) {

        Groups grupo = groupsRepo.findById(grupoId)
                .orElseThrow(() -> new RuntimeException("Grupo não encontrado"));

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        // Evitar duplicação
        if (grupo.getMembros().contains(user)) {
            return ResponseEntity.badRequest().body("Usuário já está no grupo!");
        }

        // Adiciona o membro
        grupo.getMembros().add(user);

        // Atualiza contador de membros (se existir)
        grupo.setQuantidadeDeMembros(grupo.getMembros().size());

        // Salva
        groupsRepo.save(grupo);

        return ResponseEntity.ok("Usuário adicionado ao grupo!");
    }

    // ---------------------------
    // REMOVER MEMBRO DE UM GRUPO
    // ---------------------------
    @DeleteMapping("/{grupoId}/membros/{userId}")
    public ResponseEntity<?> removerMembro(
            @PathVariable UUID grupoId,
            @PathVariable UUID userId) {

        groupsService.removerMembroDoGrupo(grupoId, userId);

        return ResponseEntity.ok("Usuário removido do grupo!");
    }

    // ---------------------------
    // ADICONAR GRUPO
    // ---------------------------
    @PostMapping
    public Groups criarGrupo(@RequestBody Groups grupo) {

        // garante que o valor nunca será null
        if (grupo.getQuantidadeDeMembros() == null) {
            grupo.setQuantidadeDeMembros(0);
        }

        return groupsRepo.save(grupo);
    }
}
