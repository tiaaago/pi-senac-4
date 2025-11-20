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

    // TODO
    // Implementar criação de gruposi?
    // - adicionar pessoas em um grupo
    // - remover pessoas de um grupo

    // Listar todos os grupos na database
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
    public void removerMembroDoGrupo(UUID grupoId, UUID userId) {

    Groups grupo = groupsRepository.findById(grupoId)
            .orElseThrow(() -> new NoSuchElementException("Grupo não encontrado: " + grupoId));

    User user = userRepository.findById(userId)
            .orElseThrow(() -> new NoSuchElementException("Usuário não encontrado: " + userId));

    boolean removed = grupo.getMembros().remove(user);

    if (!removed) {
        throw new IllegalStateException("Usuário não faz parte deste grupo");
    }

    groupsRepository.save(grupo);
}


}