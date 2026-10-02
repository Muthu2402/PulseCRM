// DTO - It is a class that only carries API wanted data (Control - Which is shown in frontend)
package com.crm.crm_backend.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
