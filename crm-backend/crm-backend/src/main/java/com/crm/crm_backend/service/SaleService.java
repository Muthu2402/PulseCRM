package com.crm.crm_backend.service;

import com.crm.crm_backend.entity.Sale;
import com.crm.crm_backend.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    public Sale createSale(Sale sale){
        sale.setStatus(Sale.Status.PROPOSAL);
        return saleRepository.save(sale);
    }

    public List<Sale> getAllSales(){
        return saleRepository.findAll();
    }

    public Sale getSaleById(Long id){
        return saleRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Sale Not Found"));
    }

    public Sale updateSaleStatus(Long id, Sale.Status newStatus){
        Sale sale = getSaleById(id);

        if(sale.getStatus() == Sale.Status.CLOSED_WON || sale.getStatus() == Sale.Status.CLOSED_LOST){
            throw new RuntimeException("Cannot change status of a closed sale");
        }
        sale.setStatus(newStatus);
        return saleRepository.save(sale);
    }

    public List<Sale> getSalesByCustomer(Long customerId){
        return saleRepository.findByCustomer_Id(customerId);
    }

    public void deleteSale(Long id){
        saleRepository.deleteById(id);
    }

}
