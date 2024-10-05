package com.example.backend.Repository;

import com.example.backend.Entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepo extends JpaRepository<Message, Integer> {
}
