package com.tjfaccipieri.acnh_companion.controller;

import com.tjfaccipieri.acnh_companion.model.Arts;
import com.tjfaccipieri.acnh_companion.repository.ArtsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/arts")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ArtsController {
  
  @Autowired
  private ArtsRepository repository;
  
  @GetMapping
  public ResponseEntity<List<Arts>> getAllBugs() {
    return ResponseEntity.ok(repository.findAll());
  }
  
  @PatchMapping("/donate")
  public ResponseEntity<Void> updateDonate(@RequestBody Arts arts){
    Arts art = repository.findById(arts.getId()).orElseThrow(() -> new EntityNotFoundException("Bug not found"));

    repository.save(art);
    return ResponseEntity.ok().build();
  }
}
