package com.tjfaccipieri.acnh_companion.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "tb_sea_creatures")
@Getter
@Setter
public class SeaCreatures {
  @Id
  private String id;
  private String name;
  private Boolean donated;
  private String icon_image;
  private String critterpedia_image;
  private String furniture_image;
  private Long sell_price;
  private String shadow;
  private String movement_speed;
  private Long total_catches_to_unlock;
  private String spawn_rates;
  private String nh_jan;
  private String nh_feb;
  private String nh_mar;
  private String nh_apr;
  private String nh_may;
  private String nh_jun;
  private String nh_jul;
  private String nh_aug;
  private String nh_sep;
  private String nh_oct;
  private String nh_nov;
  private String nh_dec;
  private String sh_jan;
  private String sh_feb;
  private String sh_mar;
  private String sh_apr;
  private String sh_may;
  private String sh_jun;
  private String sh_jul;
  private String sh_aug;
  private String sh_sep;
  private String sh_oct;
  private String sh_nov;
  private String sh_dec;
  private String size;
  private String surface;
  @Size(max = 5000)
  private String description;
  private String catch_phrase;
  private Long hha_base_points;
  private String hha_category;
  private String color1;
  private String color2;
  private String lighting_type;
  private String unlocked;
  
  @ManyToMany(mappedBy = "donatedSeaCreatures")
  @JsonIgnoreProperties("donatedSeaCreatures")
  private Set<User> donatedByUsers = new HashSet<>();
}
