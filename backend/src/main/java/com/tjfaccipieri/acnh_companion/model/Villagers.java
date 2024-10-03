package com.tjfaccipieri.acnh_companion.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_villagers")
@Getter
@Setter
public class Villagers {
  @Id
  private String id;
  private String name;
  private String icon_image;
  private String photo_image;
  private String species;
  private String gender;
  private String personality;
  private String hobby;
  private String birthday;
  private String catchphrase;
  private String favorite_song;
  private String favorite_saying;
  private String style1;
  private String style2;
  private String color1;
  private String color2;
  private String name_color;
  private String bubble_color;
}
