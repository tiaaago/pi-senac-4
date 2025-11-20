package com.studybuddy.studybuddy_api.services;

import com.studybuddy.studybuddy_api.models.Groups;
import com.studybuddy.studybuddy_api.repositories.GroupsRepository;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.swing.GroupLayout.Group;

@Service
public class GroupsService {
    @Autowire
    private GroupsRepository groupsRepository;

    @Autowired
    private UserService userService;

    // TODO
    // Implementar criação de gruposi?
    // - adicionar pessoas em um grupo
    // - remover pessoas de um grupo

    // Listar todos os grupos na database
    public list<Groups> listar() {
        return groupsRepository.findAll();
    }

    // Listar as informações de um determinado grupo
    public GroupMembersDTO buscarMembrosPorGrupo(UUID id) {

        Groups group = groupsRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Grupo não encontrado: " + id));

        List<UserDTO> membrosDTO = (group.getMembros() == null)
                ? Collections.emptyList()
                : group.getMembros()
                        .stream()
                        .map(UserDTO::new)
                        .toList();

        return new GroupMembersDTO(
                group.getId(),
                group.getName(),
                membrosDTO);
    }
    // Remover usuário do grupo
    public void removerMembroDoGrupo(UUID grupoId, UUID userId) {

    Groups grupo = groupsRepo.findById(grupoId)
            .orElseThrow(() -> new ResourceNotFoundException("Grupo não encontrado: " + grupoId));

    User user = userRepo.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado: " + userId));

    boolean removed = grupo.getMembros().remove(user);

    if (!removed) {
        throw new IllegalStateException("Usuário não faz parte deste grupo");
    }

    groupsRepo.save(grupo);
}


}