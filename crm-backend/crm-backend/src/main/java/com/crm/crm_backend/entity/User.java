package com.crm.crm_backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity // Represent the Database table
@Table(name = "users")  // Table Name
@Data  // Lombok -> automatically replace by getter,setter
public class User {

    @Id   // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto Increment
    private Long id;

    @Column(nullable = false)  // No empty values
    private String fullName;

    @Column(nullable = false,unique = true)  // no empty values and unique emails
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)  // Role stored as text in database
    private Role role;

    private LocalDateTime createdAt;

    public enum Role{
        ADMIN,SALES
    }


}
