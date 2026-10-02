package com.crm.crm_backend.controller;

import com.crm.crm_backend.entity.User;
import com.crm.crm_backend.service.UserService;
import com.crm.crm_backend.dto.LoginRequest;
import com.crm.crm_backend.dto.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api") // All endpoints are depends upon "/API"
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register") // Used for Data Creation
    @PreAuthorize("hasRole('ADMIN')")
    public User register(@RequestBody User user){
        return userService.registerUser(user);  // moves to service logic
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request){
        String token = userService.loginUser(request.getEmail(), request.getPassword());
        return new LoginResponse(token);
    }
}