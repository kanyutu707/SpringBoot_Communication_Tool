package com.example.backend.DTO;

import com.example.backend.Entity.Company;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DepartmentDTO {
    private String name;
    private Company company;
    private Integer company_id;
    public Integer getCompanyId(){
        return company_id;
    }
}
