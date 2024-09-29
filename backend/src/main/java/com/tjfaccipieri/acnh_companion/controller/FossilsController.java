package com.tjfaccipieri.acnh_companion.controller;

import com.tjfaccipieri.acnh_companion.model.Fossils;
import com.tjfaccipieri.acnh_companion.repository.FossilsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fossils")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FossilsController {
  
  @Autowired
  private FossilsRepository repository;
  
  @GetMapping
  public ResponseEntity<List<Fossils>> getAllBugs() {
    return ResponseEntity.ok(repository.findAll());
  }
  
  @PatchMapping("/donate")
  public ResponseEntity<Void> updateDonate(@RequestBody Fossils fossils){
    Fossils fossil = repository.findById(fossils.getId()).orElseThrow(() -> new EntityNotFoundException("Bug not found"));
    fossil.setDonated(fossils.getDonated());
    repository.save(fossil);
    return ResponseEntity.ok().build();
  }
}
