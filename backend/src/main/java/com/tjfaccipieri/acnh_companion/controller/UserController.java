package com.tjfaccipieri.acnh_companion.controller;

import com.tjfaccipieri.acnh_companion.model.Bugs;
import com.tjfaccipieri.acnh_companion.model.User;
import com.tjfaccipieri.acnh_companion.repository.BugsRepository;
import com.tjfaccipieri.acnh_companion.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
  
  @Autowired
  private UserRepository userRepository;
  
  @Autowired
  private BugsRepository bugsRepository;
  
  @PostMapping
  public ResponseEntity<User> createUser(@RequestBody User user) {
    return ResponseEntity.ok(userRepository.save(user));
  }
  
  @GetMapping("/{id}")
  public ResponseEntity<User> getUserById(@PathVariable Long id) {
    return userRepository.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
  }
  
  @GetMapping
  public ResponseEntity<List<User>> getAllUsers() {
    return ResponseEntity.ok(userRepository.findAll());
  }
  
  @PostMapping("/{userId}/donate/{bugId}")
  public ResponseEntity<?> donateBug(@PathVariable Long userId, @PathVariable String bugId) {
    User user = userRepository.findById(userId).orElse(null);
    Bugs bug = bugsRepository.findById(bugId).orElse(null);
    
    if(user == null || bug == null) {
      return ResponseEntity.notFound().build();
    }
    
    user.donateBug(bug);
    userRepository.save(user);
    
    return ResponseEntity.ok().body("Bug donated successfully");
  }
  
  @GetMapping("/{userId}/donated")
  public ResponseEntity<?> getDonatedBugsByUser(@PathVariable Long userId) {
    User user = userRepository.findById(userId).orElse(null);
    if (user == null) {
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(user.getDonatedBugs());
  }
}
