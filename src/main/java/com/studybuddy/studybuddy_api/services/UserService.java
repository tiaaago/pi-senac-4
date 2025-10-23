package com.studybuddy.studybuddy_api.services;

import com.studybuddy.studybuddy_api.models.User;
import com.studybuddy.studybuddy_api.repositories.UserRepository;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    //Criar usuário
    public User salvarUsuario(User user) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setSenha(encoder.encode(user.getSenha())); //criptografa a senha
        return userRepository.save(user);
    }

    public Optional<User> autenticar(String email, String senhaDigitada){
        Optional<User> userOpt  = userRepository.findByEmail(email);
        if(userOpt.isPresent()){
            User user = userOpt.get();
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

            if(encoder.matches(senhaDigitada, user.getSenha())) {
                return Optional.of(user); //Login bem sucedido
            }
        }
        return Optional.empty(); //Login falhou
    }

    //Buscar por email
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    //Deletar por email
    @Transactional
    public boolean deletarPorEmail(String email) {
        Optional<User> user =  userRepository.findByEmail(email);
        if (user.isPresent()){
            userRepository.deleteByEmail(email);
            return true;
        }
        return false;
    }

    //Listar todos usuarios
    public List<User> listarTodos(){
        return userRepository.findAll();
    }

    public Optional<User> buscarPorId(UUID id) {
        return userRepository.findById(id);
    }


}
