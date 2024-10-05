package com.example.backend.DTO;

import com.example.backend.Entity.Company;
import com.example.backend.Entity.Department;
import com.example.backend.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MessageDTO {
    private User sender;
    private User recipient;
    private Company company;
    private Department department;
    private String message;
    private Integer sender_id;
    private Integer recipient_id;
    private Integer department_id;
    private Integer company_id;

    public Integer getSenderById(){
        return sender_id;
    }

    public  Integer getRecipientById(){
        return recipient_id;
    }

    public Integer getDepartmentById(){
        return department_id;
    }

    public  Integer getCompanyById(){
        return company_id;
    }
}
