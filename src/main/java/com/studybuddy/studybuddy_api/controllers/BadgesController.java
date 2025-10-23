package com.studybuddy.studybuddy_api.controllers;

import com.studybuddy.studybuddy_api.dto.BadgesDTO;
import com.studybuddy.studybuddy_api.dto.TagsDTO;
import com.studybuddy.studybuddy_api.models.Badges;
import com.studybuddy.studybuddy_api.models.Tags;
import com.studybuddy.studybuddy_api.services.BadgesService;
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
@RequestMapping("/api/badges")
public class BadgesController {

    @Autowired
    private TagsService tagsService;

    @Autowired
    private BadgesService badgesService;

    @PostMapping
    public ResponseEntity<Badges> criarBadge(@RequestBody Badges badge) {
        Badges novaBadge = badgesService.salvar(badge);
        return ResponseEntity.status(201).body(novaBadge);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable UUID id) {
        Optional<Badges> badgeOpt = badgesService.buscarPorId(id);

        if (badgeOpt.isPresent()) {
            return ResponseEntity.ok(badgeOpt.get());
        } else {
            return ResponseEntity.status(404).body("Badge não encontrada");
        }
    }

    @GetMapping
    public ResponseEntity<List<BadgesDTO>> listarBadges(@RequestParam(defaultValue = "0") int page,
                                                        @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Badges> badgesPage = badgesService.listarPaginado(pageable);
        List<BadgesDTO> dtoList = badgesPage.stream().map(BadgesDTO::new).toList();
        return ResponseEntity.ok(dtoList);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletarPorId(@PathVariable UUID id) {
        badgesService.deletarPorId(id);
        return ResponseEntity.ok("Badge deletada com sucesso");
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
        List<Badges> badges = badgesService.buscarPorEmail(email);

        if (badges.isEmpty()) {
            return ResponseEntity.status(404).body("Badges não encontrados");
        }

        List<BadgesDTO> dtoList = badges.stream().map(BadgesDTO::new).toList();
        return ResponseEntity.ok(dtoList);
    }

}