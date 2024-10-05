package com.tjfaccipieri.acnh_companion.model.DTO.UsersDTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDonation {
  private Long userId;
  private String donateId;
  private String donateType;
}
