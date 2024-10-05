package com.example.backend.Service;

import com.example.backend.Entity.User;
import com.example.backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private UserRepo repo;

    @Autowired
    public void Repo(UserRepo repo) {
        this.repo = repo;
    }

    public ResponseEntity<List<User>> getAll(){
        List<User> users=repo.findAll();
        return  new ResponseEntity<>(users, HttpStatus.OK);
    }

    public ResponseEntity<User> getByEmail(String email){
        Optional<User> users=repo.findByEmail(email);
        return users.map(user->new ResponseEntity<>(user, HttpStatus.OK)).orElseGet(()->new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
