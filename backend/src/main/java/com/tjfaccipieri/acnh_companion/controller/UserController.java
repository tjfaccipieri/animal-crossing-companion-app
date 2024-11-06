package com.tjfaccipieri.acnh_companion.controller;

import com.tjfaccipieri.acnh_companion.model.DTO.UsersDTO.UserDonation;
import com.tjfaccipieri.acnh_companion.model.DTO.UsersDTO.UserLogin;
import com.tjfaccipieri.acnh_companion.model.Islands;
import com.tjfaccipieri.acnh_companion.model.User;
import com.tjfaccipieri.acnh_companion.repository.BugsRepository;
import com.tjfaccipieri.acnh_companion.repository.IslandsRepository;
import com.tjfaccipieri.acnh_companion.repository.UserRepository;
import com.tjfaccipieri.acnh_companion.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
  
  @Autowired
  private UserRepository userRepository;
  
  @Autowired
  private UsersService usersService;
  
  @Autowired
  private IslandsRepository islandsRepository;
  
  @PostMapping("/register")
  public ResponseEntity<User> createUser(@RequestBody User user) {
    return usersService.createNewUser(user)
            .map(response -> ResponseEntity.status(HttpStatus.CREATED).body(response))
            .orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
  }

  @PostMapping("/login")
  public ResponseEntity<UserLogin> authenticateUser(@RequestBody Optional<UserLogin> userLogin) {
    
    return usersService.authenticateUser(userLogin)
            .map(response -> ResponseEntity.status(HttpStatus.OK).body(response))
            .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
  }
  
  @PutMapping
  public ResponseEntity<User> updateUser(@RequestBody User user) {
    Optional<Islands> existingIsland = islandsRepository.findById(user.getIsland().getId());
    
    if (existingIsland.isPresent()) {
      user.setIsland(existingIsland.get());
      return ResponseEntity.ok(userRepository.save(user));
    }
    
    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Island don't exist");
  }
  
  @GetMapping("/{id}")
  public ResponseEntity<User> getUserById(@PathVariable Long id) {
    return userRepository.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
  }
  
  @GetMapping
  public ResponseEntity<List<User>> getAllUsers() {
    return ResponseEntity.ok(userRepository.findAll());
  }
  
  @PostMapping("/donate")
  public ResponseEntity<?> donate(@RequestBody UserDonation donation) {
    return usersService.donation(donation);
  }
  
  @PostMapping("/undo-donate")
  public ResponseEntity<?> undoDonate(@RequestBody UserDonation donation) {
    return usersService.undoDonation(donation);
  }
  
  // nem sei pq isso ta aqui, tem que ver depois
  @GetMapping("/{userId}/donated")
  public ResponseEntity<?> getDonatedBugsByUser(@PathVariable Long userId) {
    User user = userRepository.findById(userId).orElse(null);
    if (user == null) {
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(user.getDonatedBugs());
  }
}
