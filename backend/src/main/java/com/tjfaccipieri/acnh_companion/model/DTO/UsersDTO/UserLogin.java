package com.tjfaccipieri.acnh_companion.model.DTO.UsersDTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLogin {
    private Long id;
    private String username;
    private String password;
    private String token;
}
