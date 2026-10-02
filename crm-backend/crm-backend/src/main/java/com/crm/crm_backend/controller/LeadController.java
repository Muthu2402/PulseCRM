package com.crm.crm_backend.controller;

import com.crm.crm_backend.entity.Lead;
import com.crm.crm_backend.service.LeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leads")
public class LeadController {

    @Autowired
    private LeadService leadService;

    @PostMapping
    public Lead create(@RequestBody Lead lead){
        return leadService.createLead(lead);
    }

    @GetMapping
    public List<Lead> getAll(){
        return leadService.getAllLeads();
    }

    @GetMapping("/{id}")
    public Lead getById(@PathVariable Long id){
        return leadService.getLeadById(id);
    }

    @PutMapping("/{id}/status")
    public Lead updateStatus(@PathVariable Long id, @RequestParam Lead.Status status){
        return leadService.updateLeadStatus(id,status);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        leadService.deleteLead(id);
    }

}

// PathVariable -> /api/leads/5 -> id = 5
// RequestParam -> /api/leads/5/status?status=CONTACTED -> status = Contacted
