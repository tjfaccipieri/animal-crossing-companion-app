package com.tjfaccipieri.acnh_companion.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_fishes")
@Getter
@Setter
public class Fishes {
  @Id
  private String id;
  private int critterpedia_order;
  private String name;
  private Boolean donated;
  private String catch_difficulty;
  private String catch_phrase;
  private String color1;
  private String color2;
  private String critterpedia_image;
  
  @Column(name = "description", columnDefinition = "text")
  private String description;
  private String furniture_image;
  private Long hha_base_points;
  private String hha_category;
  private String icon_image;
  private String lighting_type;
  private Long cj_sell_price;
  private String nh_apr;
  private String nh_aug;
  private String nh_dec;
  private String nh_feb;
  private String nh_jan;
  private String nh_jul;
  private String nh_jun;
  private String nh_mar;
  private String nh_may;
  private String nh_nov;
  private String nh_oct;
  private String nh_sep;
  private String rarity;
  private Long sell;
  private String sh_apr;
  private String sh_aug;
  private String sh_dec;
  private String sh_feb;
  private String sh_jan;
  private String sh_jul;
  private String sh_jun;
  private String sh_mar;
  private String sh_may;
  private String sh_nov;
  private String sh_oct;
  private String sh_sep;
  private String shadow_size;
  private String size;
  private String spawn_rates;
  private String surface;
  private Long total_catches_to_unlock;
  private String vision;
  private String where_how;
  
  @ManyToMany(mappedBy = "donatedFishes")
  @JsonIgnoreProperties("donatedFishes")
  private Set<User> donatedByUsers = new HashSet<>();
  
}
