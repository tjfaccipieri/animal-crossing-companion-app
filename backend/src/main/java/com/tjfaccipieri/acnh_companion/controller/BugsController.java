package com.tjfaccipieri.acnh_companion.controller;

import com.tjfaccipieri.acnh_companion.model.Bugs;
import com.tjfaccipieri.acnh_companion.repository.BugsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bugs")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BugsController {
  
  @Autowired
  private BugsRepository repository;
  
  @GetMapping
  public ResponseEntity<List<Bugs>> getAllBugs() {
    return ResponseEntity.ok(repository.findAll());
  }
  
  @PatchMapping("/donate")
  public ResponseEntity<Void> updateDonate(@RequestBody Bugs bugs){
    Bugs bug = repository.findById(bugs.getId()).orElseThrow(() -> new EntityNotFoundException("Bug not found"));
    bug.setDonated(bugs.getDonated());
    repository.save(bug);
    return ResponseEntity.ok().build();
  }
}
