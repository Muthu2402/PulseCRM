package com.crm.crm_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "customers")
@Data
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false) // nullable false -> without empty value
    private String name;

    private String email;
    private String phone;
    private String company;
    private String address;
    private String notes;

    @ManyToOne // Foreign Key RelationShip -> {Multi Customers -> one sales rep}
    @JoinColumn(name = "assigned_sales_rep_id") // foreign Key reference
    private User assignedSalesRep;

}
