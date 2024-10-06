package com.tjfaccipieri.acnh_companion.service;

import com.tjfaccipieri.acnh_companion.model.*;
import com.tjfaccipieri.acnh_companion.model.DTO.UsersDTO.UserDonation;
import com.tjfaccipieri.acnh_companion.model.DTO.UsersDTO.UserLogin;
import com.tjfaccipieri.acnh_companion.repository.*;
import com.tjfaccipieri.acnh_companion.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsersService {
  
  @Autowired private UserRepository userRepository;
  @Autowired private BugsRepository bugRepository;
  @Autowired private FishesRepository fishesRepository;
  @Autowired private SeaCreaturesRepository seaCreaturesRepository;
  @Autowired private FossilsRepository fossilsRepository;
  @Autowired private ArtsRepository artsRepository;

  @Autowired
  private JwtService jwtService;

  @Autowired
  private AuthenticationManager authenticationManager;

  public ResponseEntity<Object> donation(UserDonation donation) {
    User user = userRepository.findById(donation.getUserId()).orElse(null);
    
    if (user == null) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    
    switch (donation.getDonateType()) {
      case "bug":{
        Bugs bug = bugRepository.findById(donation.getDonateId()).orElse(null);
        
        if(bug == null) {
          return ResponseEntity.notFound().build();
        }
        
        user.donateBug(bug);
        userRepository.save(user);
      }
      case "fish" : {
        Fishes fish = fishesRepository.findById(donation.getDonateId()).orElse(null);
        
        if (fish == null) {
          return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        
        user.donateFish(fish);
        userRepository.save(user);
        
      }
      case "seaCreature": {
        SeaCreatures seaCreature = seaCreaturesRepository.findById(donation.getDonateId()).orElse(null);
        
        if (seaCreature == null) {
          return ResponseEntity.notFound().build();
        }
        
        user.donateSeaCreature(seaCreature);
        userRepository.save(user);
      }
      case "fossil": {
        Fossils fossil = fossilsRepository.findById(donation.getDonateId()).orElse(null);

        if (fossil == null) {
          return ResponseEntity.notFound().build();
        }

        user.donateFossil(fossil);
        userRepository.save(user);
      }
      case "art":  {
        Arts art = artsRepository.findById(donation.getDonateId()).orElse(null);

        if (art == null) {
          return ResponseEntity.badRequest().build();
        }

        user.donateArt(art);
        userRepository.save(user);
      }
    }
    
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }

  public ResponseEntity<Object> undoDonation(UserDonation donation) {
    User user = userRepository.findById(donation.getUserId()).orElse(null);

    if (user == null) {
      return ResponseEntity.notFound().build();
    }
    
    switch (donation.getDonateType()) {
      case "bug":{
        Bugs bug = bugRepository.findById(donation.getDonateId()).orElse(null);
        
        if(bug == null) {
          return ResponseEntity.notFound().build();
        }
        
        user.undoDonateBug(bug);
        userRepository.save(user);
      }
      case "fish" : {
        Fishes fish = fishesRepository.findById(donation.getDonateId()).orElse(null);
        
        if (fish == null) {
          return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        
        user.undoDonateFish(fish);
        userRepository.save(user);
        
      }
      case "seaCreature": {
        SeaCreatures seaCreature = seaCreaturesRepository.findById(donation.getDonateId()).orElse(null);
        
        if (seaCreature == null) {
          return ResponseEntity.notFound().build();
        }
        
        user.undoDonateSeaCreatures(seaCreature);
        userRepository.save(user);
      }
      case "fossil": {
        Fossils fossil = fossilsRepository.findById(donation.getDonateId()).orElse(null);
        
        if (fossil == null) {
          return ResponseEntity.notFound().build();
        }
        
        user.undoDonateFossil(fossil);
        userRepository.save(user);
      }
      case "art":  {
        Arts art = artsRepository.findById(donation.getDonateId()).orElse(null);
        
        if (art == null) {
          return ResponseEntity.badRequest().build();
        }
        
        user.undoDonateArt(art);
        userRepository.save(user);
      }
    }
    
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }
  
  public Optional<User> createNewUser(User user) {
    if (userRepository.findByUsername(user.getUsername()).isPresent()) {
      return Optional.empty();
    }

    user.setPassword(hashPassword(user.getPassword()));

    return Optional.of(userRepository.save(user));
  }

  public Optional<UserLogin> authenticateUser(Optional<UserLogin> userLogin) {
    if (userLogin.isEmpty()) {
      return Optional.empty();
    }
    
    var credentials = new UsernamePasswordAuthenticationToken(userLogin.get().getUsername(), userLogin.get().getPassword());

    Authentication authentication = authenticationManager.authenticate(credentials);

    if (authentication.isAuthenticated()) {
      Optional<User> user = userRepository.findByUsername(userLogin.get().getUsername());

      if (user.isPresent()) {
        userLogin.get().setId(user.get().getId());
        userLogin.get().setUsername(user.get().getUsername());
        userLogin.get().setPassword("");
        userLogin.get().setToken(generateToken(userLogin.get().getUsername()));

        return userLogin;
      }
    }
      return Optional.empty();
  }

  private String hashPassword(String password) {
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    return encoder.encode(password);
  }

  private String generateToken(String user) {
    return "Bearer " + jwtService.generateToken(user);
  }
  
}
