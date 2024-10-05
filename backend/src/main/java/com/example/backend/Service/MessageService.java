package com.example.backend.Service;

import com.example.backend.DTO.MessageDTO;
import com.example.backend.Entity.Company;
import com.example.backend.Entity.Department;
import com.example.backend.Entity.Message;
import com.example.backend.Entity.User;
import com.example.backend.Repository.MessageRepo;
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
public class MessageService {
    private MessageRepo repo;

    private final EntityManager entityManager;

    @Autowired
    public void Repo(MessageRepo repo) {
        this.repo = repo;
    }

    public ResponseEntity<List<Message>> getAll(){
        List<Message> messages=repo.findAll();
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }

    public ResponseEntity<Message> getById(int id){
        Optional<Message> messages=repo.findById(id);
        return messages.map(message -> new ResponseEntity<>(message, HttpStatus.OK)).orElseGet(()->new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ResponseEntity<Message> create(MessageDTO dto){

        // EXTRACT COMPANY ID
        Company company=null;
        if(dto.getCompany_id()!=null && dto.getCompanyById()!=0){
            company=entityManager.find(Company.class, dto.getCompanyById());
        }
        if(company!=null&&!entityManager.contains(company)){
            company=entityManager.merge(company);
        }

        // EXTRACT DEPARTMENT ID
        Department department=null;
        if(dto.getDepartment_id()!=null && dto.getDepartmentById()!=0){
            department=entityManager.find(Department.class, dto.getDepartmentById());

        }
        if(department!=null && !entityManager.contains(department)){
            department=entityManager.merge(department);
        }

        //EXTRACT SENDER ID
        User sender=null;
        if(dto.getSender_id()!=null && dto.getSenderById()!=0){
            sender=entityManager.find(User.class, dto.getSenderById());
        }
        if(sender!=null && !entityManager.contains(sender)){
            sender=entityManager.merge(sender);
        }


        // EXTRACT RECIPIENT
        User recipient=null;
        if(dto.getRecipient_id()!=null && dto.getRecipientById()!=0){
            recipient=entityManager.find(User.class, dto.getRecipientById());
        }
        if(recipient!=null && !entityManager.contains(recipient)){
            recipient=entityManager.merge(recipient);
        }

        var message=Message.builder()
                .sender(sender)
                .message(dto.getMessage())
                .recipient(recipient)
                .department(department)
                .company(company)
                .build();
        Message newMessage=repo.save(message);
        System.out.println(newMessage);
        return new ResponseEntity<>(newMessage, HttpStatus.CREATED);
    }

    public ResponseEntity<Message> update(int id, Message message){
        Optional<Message> newMessage=repo.findById(id);
        if(newMessage.isPresent()){
            Message messageData=newMessage.get();
            messageData.setMessage(message.getMessage());
            messageData.setCompany(message.getCompany());
            messageData.setSender(message.getSender());
            messageData.setRecipient(message.getRecipient());
            messageData.setDepartment(message.getDepartment());
            repo.save(messageData);
            return new ResponseEntity<>(messageData, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<Void> delete(int id){
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
