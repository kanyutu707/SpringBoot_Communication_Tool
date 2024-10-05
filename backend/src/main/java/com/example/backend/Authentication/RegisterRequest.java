package com.example.backend.Authentication;

import com.example.backend.Entity.Department;
import com.example.backend.Entity.Message;
import com.example.backend.Entity.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private Department department;


    private Role role;

    private Set<Message> sent=new HashSet<>();

    private Set<Message> received=new HashSet<>();

    private Integer department_id;

    public Integer getDeptId(){
        return department_id;
    }


}
