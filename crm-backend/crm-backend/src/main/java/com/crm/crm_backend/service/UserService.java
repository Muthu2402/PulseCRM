package com.crm.crm_backend.service;

import com.crm.crm_backend.entity.User;
import com.crm.crm_backend.repository.UserRepository;
import com.crm.crm_backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service // This class for creating Business logics
public class UserService {

    @Autowired //Dependency Injection
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    // Spring security readymade algorithm class for encrypt/decrypt password
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User registerUser(User user){
        if(userRepository.findByEmail(user.getEmail()).isPresent()){
            throw new RuntimeException("Email Already Exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Plain password is converted to Hash
        user.setCreatedAt(LocalDateTime.now());

        return userRepository.save(user); // DB insert (JPA repository free method)
    }

    public String loginUser(String email,String password){
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("Invalid Email or Password"));
        if(!passwordEncoder.matches(password,user.getPassword())){
            throw new RuntimeException("Invalid Email or Password");
        }
        return jwtUtil.generateToken(user.getEmail(),user.getRole().name());
    }

}
