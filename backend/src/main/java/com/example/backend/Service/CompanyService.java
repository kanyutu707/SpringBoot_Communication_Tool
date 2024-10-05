package com.example.backend.Service;

import com.example.backend.Entity.Company;
import com.example.backend.Repository.CompanyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {
    private CompanyRepo repo;

    @Autowired
    public void Repo(CompanyRepo repo) {
        this.repo = repo;
    }

    public ResponseEntity<List<Company>> getAll(){
        List<Company> companies=repo.findAll();
        return new ResponseEntity<>(companies, HttpStatus.OK);
    }

    public ResponseEntity<Company> getById(int id){
        Optional<Company> companies=repo.findById(id);
        return companies.map(company -> new ResponseEntity<>(company, HttpStatus.OK)).orElseGet(()-> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ResponseEntity<Company> create(Company company){
        Company newCompany=repo.save(company);
        return new ResponseEntity<>(newCompany, HttpStatus.CREATED);
    }

    public ResponseEntity<Company> update(int id, Company company){
        Optional<Company> newCompany=repo.findById(id);
        if(newCompany.isPresent()){
            Company companyData=newCompany.get();
            companyData.setDepartments(company.getDepartments());
            companyData.setMessages(company.getMessages());
            companyData.setName(company.getName());
            repo.save(companyData);
            return new ResponseEntity<>(companyData, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<Void> delete(int id){
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
