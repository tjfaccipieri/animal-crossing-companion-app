package com.tjfaccipieri.acnh_companion.controller;


import com.tjfaccipieri.acnh_companion.model.Villagers;
import com.tjfaccipieri.acnh_companion.repository.VillagersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/villagers")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class VillagersController {
  
  @Autowired
  private VillagersRepository repository;
  
  @GetMapping
  public ResponseEntity<List<Villagers>> getAllVillagers() {
    return ResponseEntity.ok(repository.findAll());
  }
  
  @GetMapping("/{species}")
  public ResponseEntity<List<Villagers>> getBySpecies(@PathVariable String species) {
    return ResponseEntity.ok(repository.findAllBySpeciesContainingIgnoreCase(species));
  }
}
