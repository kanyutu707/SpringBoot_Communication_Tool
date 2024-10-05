package com.example.backend.Service;

import com.example.backend.DTO.DepartmentDTO;
import com.example.backend.Entity.Company;
import com.example.backend.Entity.Department;
import com.example.backend.Repository.DepartmentRepo;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DepartmentService {
    private DepartmentRepo repo;
    private final EntityManager entityManager;
    @Autowired
    public void Repo(DepartmentRepo repo) {
        this.repo = repo;
    }

    public ResponseEntity<List<Department>> getAll(){
        List<Department> departments=repo.findAll();
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }

    public ResponseEntity<Department> getById(int id){
        Optional<Department> department=repo.findById(id);

        return department.map(foundDept-> new ResponseEntity<>(foundDept, HttpStatus.OK)).orElseGet(()->new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ResponseEntity<Department> create(DepartmentDTO dto){
        Company company=null;
        if(dto.getCompany_id()!=null && dto.getCompanyId()!=0){
            company=entityManager.find(Company.class, dto.getCompanyId());
        }
        if(company!=null && !entityManager.contains(company)){
            company=entityManager.merge(company);
        }
        var department=Department.builder()
                .name(dto.getName())
                .company(company)
                .build();
        Department newDept=repo.save(department);
        return new ResponseEntity<>(newDept, HttpStatus.CREATED);
    }

    public ResponseEntity<Department> update(int id, Department department){
        Optional<Department> optionalDepartment=repo.findById(id);
        if(optionalDepartment.isPresent()){
            Department updateDepartment=optionalDepartment.get();
           updateDepartment.setCompany(department.getCompany());
            updateDepartment.setName(department.getName());
            updateDepartment.setMessages(department.getMessages());
            updateDepartment.setUsers(department.getUsers());
            repo.save(updateDepartment);
            return new ResponseEntity<>(updateDepartment, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<Void> delete(int id){
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

