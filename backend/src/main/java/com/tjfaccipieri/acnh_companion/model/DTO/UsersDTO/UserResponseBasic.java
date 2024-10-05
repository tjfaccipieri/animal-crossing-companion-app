package com.tjfaccipieri.acnh_companion.model.DTO.UsersDTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseBasic {
  private Long id;
  private String username;
  private String email;
  private int totalDonatedBugs;
  private int totalDonatedFishes;
  private int totalDonatedFossil;
  private int totalDonatedArt;
  private int totalDonatedSeaCreatures;
}
