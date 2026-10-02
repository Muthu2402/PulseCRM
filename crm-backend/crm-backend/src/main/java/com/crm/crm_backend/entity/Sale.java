package com.crm.crm_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "sales")
@Data
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    private BigDecimal amount;

    @Enumerated(EnumType.STRING)
    private Status status = Status.PROPOSAL;

    private LocalDate date = LocalDate.now();

    @ManyToOne
    @JoinColumn(name = "assigned_sales_rep_id")
    private User assignedSalesRep;

    public enum Status {
        PROPOSAL, NEGOTIATION, CLOSED_WON, CLOSED_LOST
    }
}