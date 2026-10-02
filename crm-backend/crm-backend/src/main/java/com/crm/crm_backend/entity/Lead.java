package com.crm.crm_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "leads")
@Data
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String contactInfo;

    @Enumerated(EnumType.STRING)
    @Column(length = 30)
    private Source source;

    @Enumerated(EnumType.STRING)
    private Status status = Status.NEW;  // Default value fixed

    @ManyToOne
    @JoinColumn(name = "assigned_sales_rep_id")
    private User assignedSalesRep;

    public enum Source{
        REFERRAL,WEB,ADS
    }

    public enum Status{
        NEW,CONTACTED,CONVERTED,LOST
    }
}
