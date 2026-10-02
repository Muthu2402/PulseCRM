package com.crm.crm_backend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

//API - Application Programming Interface

@RestController // Direct Data return to browser/frontend (API Response)
public class TestController {
    @GetMapping("/api/test") // Root Defining (http://localhost:8080/api/test)
    public String test(){
        return "CRM Backend is Successfully Working";
    }
}