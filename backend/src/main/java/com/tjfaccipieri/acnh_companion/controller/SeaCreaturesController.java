package com.tjfaccipieri.acnh_companion.controller;

import com.tjfaccipieri.acnh_companion.model.SeaCreatures;
import com.tjfaccipieri.acnh_companion.repository.SeaCreaturesRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sea_creatures")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SeaCreaturesController {
  
  @Autowired
  private SeaCreaturesRepository repository;
  
  @GetMapping
  public ResponseEntity<List<SeaCreatures>> getAllBugs() {
    return ResponseEntity.ok(repository.findAll());
  }
  
  @PatchMapping("/donate")
  public ResponseEntity<Void> updateDonate(@RequestBody SeaCreatures seaCreatures){
    SeaCreatures seaCreature = repository.findById(seaCreatures.getId()).orElseThrow(() -> new EntityNotFoundException("Bug not found"));
    seaCreature.setDonated(seaCreatures.getDonated());
    repository.save(seaCreature);
    return ResponseEntity.ok().build();
  }
}
