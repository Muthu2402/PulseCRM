package com.crm.crm_backend.repository;

import com.crm.crm_backend.entity.Lead;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeadRepository extends JpaRepository<Lead, Long> {
    List<Lead> findByStatus(Lead.Status status);
}
