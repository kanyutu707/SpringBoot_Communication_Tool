package com.example.backend.Controller;

import com.example.backend.DTO.MessageDTO;
import com.example.backend.Entity.Message;
import com.example.backend.Service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600, allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/becot/message")

public class MessageController {
    private MessageService service;

    @Autowired
    public void Service(MessageService service) {
        this.service = service;
    }

    @GetMapping("/get_all")
    public ResponseEntity<List<Message>> getAll(){
        return service.getAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Message> getById(@PathVariable int id){
        return service.getById(id);
    }

    @PostMapping("/create")
    public ResponseEntity<Message> create(@RequestBody MessageDTO message){
        return service.create(message);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Message> update(@PathVariable int id, @RequestBody Message message){
        return service.update(id, message);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id){
        return service.delete(id);
    }
}
