package com.studybuddy.studybuddy_api.services;

import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.studybuddy.studybuddy_api.dto.GroupMembersDTO;
import com.studybuddy.studybuddy_api.dto.UserDTO;
import com.studybuddy.studybuddy_api.models.Groups;
import com.studybuddy.studybuddy_api.models.User;
import com.studybuddy.studybuddy_api.repositories.GroupsRepository;
import com.studybuddy.studybuddy_api.repositories.UserRepository;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@Service
public class GroupsService {
        @Autowired
        private GroupsRepository groupsRepository;

        @Autowired
        private UserRepository userRepository;

        @Autowired
        private UserService userService;

        public List<Groups> listar() {
                return groupsRepository.findAll();
        }

        // Listar as informações de um determinado grupo
        public GroupMembersDTO buscarMembrosPorGrupo(UUID id) {

                Groups group = groupsRepository.findById(id)
                                .orElseThrow(() -> new NoSuchElementException("Grupo não encontrado: " + id));

                List<UserDTO> membrosDTO = (group.getMembros() == null)
                                ? Collections.emptyList()
                                : group.getMembros()
                                                .stream()
                                                .map(UserDTO::new)
                                                .toList();

                return new GroupMembersDTO(
                                group.getId(),
                                group.getNome(),
                                membrosDTO);
        }

        // Remover usuário do grupo
        public Groups removerMembroDoGrupo(UUID grupoId, UUID userId) {

                Groups grupo = groupsRepository.findById(grupoId)
                                .orElseThrow(() -> new NoSuchElementException("Grupo não encontrado: " + grupoId));

                User user = userRepository.findById(userId)
                                .orElseThrow(() -> new NoSuchElementException("Usuário não encontrado: " + userId));

                boolean removed = grupo.getMembros().remove(user);

                if (!removed) {
                        throw new IllegalStateException("Usuário não faz parte deste grupo");
                }
                grupo.getMembros().remove(user);
                grupo.setQuantidadeDeMembros(grupo.getMembros().size());
                groupsRepository.save(grupo);
                return grupo;

        }

        // Adicionar usuário ao grupo
        public Groups adicionarMembro(UUID grupoId, UUID userId) {

                // Busca o grupo
                Groups grupo = groupsRepository.findById(grupoId)
                                .orElseThrow(() -> new RuntimeException("Grupo não encontrado"));

                // Busca o usuário
                User user = userRepository.findById(userId)
                                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

                // Evita duplicar
                if (grupo.getMembros().contains(user)) {
                        throw new RuntimeException("Usuário já está no grupo");
                }

                // Adiciona o membro
                grupo.getMembros().add(user);

                // Atualiza contador
                grupo.setQuantidadeDeMembros(grupo.getMembros().size());

                // Salva
                return groupsRepository.save(grupo);
        }
}