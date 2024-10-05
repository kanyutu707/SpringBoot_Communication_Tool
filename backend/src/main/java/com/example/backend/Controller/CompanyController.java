package com.example.backend.Controller;

import com.example.backend.Entity.Company;
import com.example.backend.Service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600, allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/becot/authenticate/company")
public class CompanyController {
    private CompanyService service;

    @Autowired
    public void Service(CompanyService service) {
        this.service = service;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Company>> getAll(){
        return service.getAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Company> getById(@PathVariable int id){
        return service.getById(id);
    }

    @PostMapping("/create")
    public ResponseEntity<Company> create( @RequestBody Company company){
        return service.create(company);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Company> update(@PathVariable int id, @RequestBody Company company){
        return service.update(id, company);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id){
        return service.delete(id);
    }
}
