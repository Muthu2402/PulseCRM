package com.crm.crm_backend.controller;

import com.crm.crm_backend.entity.Sale;
import com.crm.crm_backend.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sales")
public class SaleController {

    @Autowired
    private SaleService saleService;

    @PostMapping
    public Sale create(@RequestBody Sale sale){
        return saleService.createSale(sale);
    }

    @GetMapping
    public List<Sale> getAll(){
        return saleService.getAllSales();
    }

    @GetMapping("/{id}")
    public Sale getById(@PathVariable Long id){
        return saleService.getSaleById(id);
    }

    @GetMapping("/customer/{customerId}")
    public List<Sale> getByCustomer(@PathVariable Long customerId){
        return saleService.getSalesByCustomer(customerId);
    }

    @PutMapping("/{id}/status")
    public Sale updateStatus(@PathVariable Long id, @RequestParam Sale.Status status){
        return saleService.updateSaleStatus(id,status);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        saleService.deleteSale(id);
    }
}
