package com.crm.crm_backend.repository;

import com.crm.crm_backend.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    List<Sale> findByCustomer_Id(Long customerId);
}
