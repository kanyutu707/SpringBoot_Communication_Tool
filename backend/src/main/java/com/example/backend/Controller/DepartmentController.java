package com.example.backend.Controller;

import com.example.backend.DTO.DepartmentDTO;
import com.example.backend.Entity.Department;
import com.example.backend.Service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600, allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/becot/authenticate/department")

public class DepartmentController {
    private DepartmentService service;

    @Autowired
    public void Service(DepartmentService service) {
        this.service = service;
    }

    @GetMapping("/get_all")
    public ResponseEntity<List<Department>> getAll(){
        return service.getAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Department> getById(@PathVariable int id){
        return  service.getById(id);
    }


    @PostMapping("/create")
    public ResponseEntity<Department> create(@RequestBody DepartmentDTO department){
        return service.create(department);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Department> update(@RequestBody Department department, @PathVariable int id){
        return service.update(id, department);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id){
        return service.delete(id);
    }
}
