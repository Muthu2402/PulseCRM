package com.crm.crm_backend.service;

import com.crm.crm_backend.entity.Lead;
import com.crm.crm_backend.repository.LeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeadService {

    @Autowired
    private LeadRepository leadRepository;

    public Lead createLead(Lead lead){
        lead.setStatus(Lead.Status.NEW);
        return leadRepository.save(lead);
    }

    public List<Lead> getAllLeads(){
        return leadRepository.findAll();
    }

    public Lead getLeadById(Long id){
        return leadRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Lead Not Found"));
    }
    // Status Work Flow(New -> contacted -> converted or lost)
    public Lead updateLeadStatus(Long id,Lead.Status newStatus){
        Lead lead = getLeadById(id);
        // Lead doesnot change directly to Converted or Lost Stage.
        if(lead.getStatus() == Lead.Status.CONVERTED || lead.getStatus() == Lead.Status.LOST){
            throw new RuntimeException("Cannot change status of a Closed Lead");
        }
        // Lead doesnot skip "Contacted"
        if(lead.getStatus() == Lead.Status.NEW && newStatus == Lead.Status.CONVERTED){
            throw new RuntimeException("Lead must be contacted before Converted");
        }
        lead.setStatus(newStatus);
        return leadRepository.save(lead);
    }

    public void deleteLead(Long id){
        leadRepository.deleteById(id);
    }
}