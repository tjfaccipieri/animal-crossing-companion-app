package com.tjfaccipieri.acnh_companion.controller;

import com.tjfaccipieri.acnh_companion.model.Islands;
import com.tjfaccipieri.acnh_companion.repository.IslandsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/islands")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class IslandsController {
  
  @Autowired private IslandsRepository islandsRepository;
  
  @GetMapping
  public ResponseEntity<List<Islands>> getAllIslands() {
    return ResponseEntity.ok(islandsRepository.findAll());
  }
  
  @PostMapping
  public ResponseEntity<Islands> createIsland(@RequestBody Islands island) {
    return ResponseEntity.ok(islandsRepository.save(island));
  }
}
