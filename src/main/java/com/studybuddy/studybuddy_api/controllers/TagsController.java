package com.studybuddy.studybuddy_api.controllers;

import com.studybuddy.studybuddy_api.dto.TagsDTO;
import com.studybuddy.studybuddy_api.models.Tags;
import com.studybuddy.studybuddy_api.services.TagsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/tags")
public class TagsController {


    @Autowired
    private TagsService tagsService;

    @PostMapping
    public ResponseEntity<Tags> criarTag(@RequestBody Tags tag) {
        Tags novaTag = tagsService.salvar(tag);
        return ResponseEntity.status(201).body(novaTag);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable UUID id) {
        Optional<Tags> tagOpt = tagsService.buscarPorId(id);

        if (tagOpt.isPresent()) {
            return ResponseEntity.ok(tagOpt.get());
        } else {
            return ResponseEntity.status(404).body("Tag não encontrada");
        }
    }

    @GetMapping
    public ResponseEntity<List<TagsDTO>> listarTags(@RequestParam(defaultValue = "0") int page,
                                                    @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Tags> tagsPage = tagsService.listarPaginado(pageable);
        List<TagsDTO> dtoList = tagsPage.stream().map(TagsDTO::new).toList();
        return ResponseEntity.ok(dtoList);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletarPorId(@PathVariable UUID id) {
        tagsService.deletarPorId(id);
        return ResponseEntity.ok("Tag deletada com sucesso");
    }

    @GetMapping("/usuario/{userId}")
    public ResponseEntity<?> buscarPorUsuario(@PathVariable UUID userId) {
        Optional<Tags> tagOpt = tagsService.buscarPorUsuarioUnico(userId);

        if (tagOpt.isEmpty()) {
            return ResponseEntity.status(404).body("Tag não encontrada");
        }

        TagsDTO dto = new TagsDTO(tagOpt.get());
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<?> buscarPorEmail(@PathVariable String email) {
        List<Tags> tags = tagsService.buscarPorEmail(email);

        if (tags.isEmpty()) {
            return ResponseEntity.status(404).body("Tags não encontradas");
        }

        List<TagsDTO> dtoList = tags.stream().map(TagsDTO::new).toList();
        return ResponseEntity.ok(dtoList);
    }

}