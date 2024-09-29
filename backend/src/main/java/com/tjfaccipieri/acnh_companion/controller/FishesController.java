package com.tjfaccipieri.acnh_companion.controller;

import com.tjfaccipieri.acnh_companion.model.Bugs;
import com.tjfaccipieri.acnh_companion.model.Fishes;
import com.tjfaccipieri.acnh_companion.repository.FishesRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fishes")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FishesController {
  
  @Autowired
  private FishesRepository repository;
  
  @GetMapping
  public ResponseEntity<List<Fishes>> getAllBugs() {
    return ResponseEntity.ok(repository.findAll());
  }
  
  @PatchMapping("/donate")
  public ResponseEntity<Void> updateDonate(@RequestBody Fishes fishes){
    Fishes fish = repository.findById(fishes.getId()).orElseThrow(() -> new EntityNotFoundException("Bug not found"));
    fish.setDonated(fishes.getDonated());
    repository.save(fish);
    return ResponseEntity.ok().build();
  }
}
