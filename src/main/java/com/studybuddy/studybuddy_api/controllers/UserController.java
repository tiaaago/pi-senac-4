package com.studybuddy.studybuddy_api.controllers;

import com.studybuddy.studybuddy_api.dto.*;
import com.studybuddy.studybuddy_api.models.Badges;
import com.studybuddy.studybuddy_api.models.Tags;
import com.studybuddy.studybuddy_api.models.User;
import com.studybuddy.studybuddy_api.services.BadgesService;
import com.studybuddy.studybuddy_api.services.TagsService;
import com.studybuddy.studybuddy_api.services.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/users")


public class UserController {

    @Autowired
    private TagsService tagsService;

    @Autowired
    private BadgesService badgesService;

    @Autowired UserService userService;

    //salvar usuario
    @PostMapping
    public ResponseEntity<User> save(@RequestBody User user) {
        User novo = userService.salvarUsuario(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(novo);
    }

    //login usuario
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<User> user = userService.autenticar(loginRequest.getEmail(), loginRequest.getSenha());
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais invalidas");
        }
    }

    //get usuario
    @GetMapping("/{email}")
    public ResponseEntity<?> buscarporEmail(@PathVariable String email) {
        Optional<User> user = userService.findByEmail(email);

        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario nao encontrado");
        }
    }

    //deletar usuario
    @DeleteMapping("/{email}")
    public ResponseEntity<?> deletarUsuario(@PathVariable String email) {
        boolean deletado = userService.deletarPorEmail(email);

        if (deletado) {
            return ResponseEntity.ok("Usuario deletado com sucesso");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario nao encontrado");
        }
    }

    //editar perfil do usuario
    @PutMapping("/{email}")
    public ResponseEntity<?> editarUsuario (@PathVariable String email, @RequestBody User novosDados){
        Optional<User> UserOpt = userService.findByEmail(email);

        if (UserOpt.isPresent()) {
            User user = UserOpt.get();
            user.setNome(novosDados.getNome());
            user.setCurso(novosDados.getCurso());
            user.setSemestre(novosDados.getSemestre());
            user.setXp(novosDados.getXp());
            return ResponseEntity.ok(userService.salvarUsuario(novosDados));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario nao encontrado");
        }
    }

    //listar todos usuarios
    @GetMapping
    public ResponseEntity<List<User>> listarTodos(){
        List<User> usuarios = userService.listarTodos();
        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/perfil/{userId}")
    public ResponseEntity<?> buscarPerfil(@PathVariable UUID userId) {
        Optional<Tags> tagsOpt = tagsService.buscarPorUsuarioUnico(userId);
        Optional<Badges> badgesOpt = badgesService.buscarPorUsuarioUnico(userId);

        Optional<User> userOpt = userService.buscarPorId(userId);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).body("Usuário não encontrado");
        }
        UserDTO userDTO = new UserDTO(userOpt.get());

        if (tagsOpt.isEmpty() && badgesOpt.isEmpty()) {
            return ResponseEntity.status(404).body("Tags e Badges não encontrados");
        }

        TagsDTO tagsDTO = tagsOpt.map(TagsDTO::new).orElse(null);
        BadgesDTO badgesDTO = badgesOpt.map(BadgesDTO::new).orElse(null);

        PerfilDTO perfil = new PerfilDTO(userDTO, tagsDTO, badgesDTO);
        return ResponseEntity.ok(perfil);
    }


    @GetMapping("/perfil/email/{email}")
    public ResponseEntity<?> buscarPerfilPorEmail(@PathVariable String email) {
        Optional<User> userOpt = userService.findByEmail(email);
        Optional<Tags> tagsOpt = tagsService.buscarPorEmailUnico(email);
        Optional<Badges> badgesOpt = badgesService.buscarPorEmailUnico(email);

        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).body("Usuário não encontrado");
        }

        UserDTO userDTO = new UserDTO(userOpt.get());
        TagsDTO tagsDTO = tagsOpt.map(TagsDTO::new).orElse(null);
        BadgesDTO badgesDTO = badgesOpt.map(BadgesDTO::new).orElse(null);

        PerfilDTO perfil = new PerfilDTO(userDTO, tagsDTO, badgesDTO);
        return ResponseEntity.ok(perfil);
    }

   /* @GetMapping("/perfil/email/{email}")
    public ResponseEntity<?> buscarPerfilPorEmail(@PathVariable String email) {
        Optional<Tags> tagsOpt = tagsService.buscarPorEmailUnico(email);
        Optional<Badges> badgesOpt = badgesService.buscarPorEmailUnico(email);

        if (tagsOpt.isEmpty() && badgesOpt.isEmpty()) {
            return ResponseEntity.status(404).body("Tags e Badges não encontrados");
        }

        TagsDTO tagsDTO = tagsOpt.map(TagsDTO::new).orElse(null);
        BadgesDTO badgesDTO = badgesOpt.map(BadgesDTO::new).orElse(null);

        PerfilDTO perfil = new PerfilDTO(tagsDTO, badgesDTO);
        return ResponseEntity.ok(perfil);
    }*/

}
