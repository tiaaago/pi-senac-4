package com.studybuddy.studybuddy_api.services;

import com.studybuddy.studybuddy_api.models.Badges;
import com.studybuddy.studybuddy_api.repositories.BadgesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BadgesService {
    @Autowired
    private BadgesRepository badgesRepository;

    public Badges salvar(Badges badge){
        return badgesRepository.save(badge);
    }

    public Optional<Badges> buscarPorId(UUID id){
        return badgesRepository.findById(id);
    }

    public Page<Badges> listarPaginado(Pageable pageable) {
        return badgesRepository.findAll(pageable);
    }


    @Transactional
    public void deletarPorId(UUID id){
        badgesRepository.deleteById(id);
    }

    public List<Badges> buscarPorUsuario(UUID userId) {
        return badgesRepository.findByUserId(userId);
    }

    public List<Badges> buscarPorEmail(String email) {
        return badgesRepository.findByUserEmail(email);
    }
    public Optional<Badges> buscarPorUsuarioUnico(UUID userId) {
        return badgesRepository.findByUserId(userId).stream().findFirst();
    }
    public Optional<Badges> buscarPorEmailUnico(String email) {
        return badgesRepository.findByUserEmail(email).stream().findFirst();
    }

}
