package com.example.backend.Controller;

import com.example.backend.Entity.User;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600, allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/user")
public class UserController {
    private UserService service;

    @Autowired
    public void Service(UserService service) {
        this.service = service;
    }

    @GetMapping("/get_all")
    public ResponseEntity<List<User>> getAll(){
        return service.getAll();
    }


    @GetMapping("/get/{email}")
    public ResponseEntity<User> getByEmail(@PathVariable String email){
        return service.getByEmail(email);
    }
}
