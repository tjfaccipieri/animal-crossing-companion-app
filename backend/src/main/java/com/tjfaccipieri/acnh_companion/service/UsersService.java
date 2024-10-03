package com.tjfaccipieri.acnh_companion.service;

import com.tjfaccipieri.acnh_companion.model.Bugs;
import com.tjfaccipieri.acnh_companion.model.DTO.UserDonation;
import com.tjfaccipieri.acnh_companion.model.Fishes;
import com.tjfaccipieri.acnh_companion.model.SeaCreatures;
import com.tjfaccipieri.acnh_companion.model.User;
import com.tjfaccipieri.acnh_companion.repository.BugsRepository;
import com.tjfaccipieri.acnh_companion.repository.FishesRepository;
import com.tjfaccipieri.acnh_companion.repository.SeaCreaturesRepository;
import com.tjfaccipieri.acnh_companion.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UsersService {
  
  @Autowired private UserRepository userRepository;
  @Autowired private BugsRepository bugRepository;
  @Autowired private FishesRepository fishesRepository;
  @Autowired private SeaCreaturesRepository seaCreaturesRepository;

  public ResponseEntity<Object> donation(UserDonation donation) {
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
        
        user.donateBug(bug);
        userRepository.save(user);
      }
      case "fish" : {
        Fishes fish = fishesRepository.findById(donation.getDonateId()).orElse(null);
        
        if (fish == null) {
          return ResponseEntity.notFound().build();
        }
        
        user.donateFish(fish);
        userRepository.save(user);
      }
      case "seaCreature": {
        SeaCreatures seaCreature = seaCreaturesRepository.findById(donation.getDonateId()).orElse(null);
        
        if (seaCreature == null) {
          return ResponseEntity.notFound().build();
        }
        
        user.donateSeaCreatures(seaCreature);
        userRepository.save(user);
      }
    }
    
    return ResponseEntity.ok().body("Donated successfully");
  }
  
}
