package com.studybuddy.studybuddy_api.services;

import com.studybuddy.studybuddy_api.models.Tags;
import com.studybuddy.studybuddy_api.repositories.TagsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Service
public class TagsService {
    @Autowired
    private TagsRepository tagsRepository;

    public Tags salvar(Tags tag){
        return tagsRepository.save(tag);
    }

    public Optional<Tags> buscarPorId(UUID id){
        return tagsRepository.findById(id);
    }


    public Page<Tags> listarPaginado(Pageable pageable) {
        return tagsRepository.findAll(pageable);
    }

    @Transactional
    public void deletarPorId(UUID id){
        tagsRepository.deleteById(id);
    }


    public List<Tags> buscarPorEmail(String email) {
        return tagsRepository.findByUserEmail(email);
    }

    public Optional<Tags> buscarPorUsuarioUnico(UUID userId) {
        return tagsRepository.findByUserId(userId).stream().findFirst();
    }

    public Optional<Tags> buscarPorEmailUnico(String email) {
        return tagsRepository.findByUserEmail(email).stream().findFirst();
    }


}
