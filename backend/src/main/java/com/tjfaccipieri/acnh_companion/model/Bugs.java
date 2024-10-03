package com.tjfaccipieri.acnh_companion.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_bugs")
@Getter
@Setter
public class Bugs {
  
  @Id
  private String id;
  private int critterpedia_order;
  private String name;
  private String catch_phrase;
  private String color1;
  private String color2;
  private String critterpedia_image;
  private String description;
  private Long flick_sell_price;
  private String furniture_image;
  private Long hha_base_points;
  private String hha_category;
  private String icon_image;
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
  private Long sell_price;
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
  private String size;
  private String spawn_rates;
  private String surface;
  private Long total_catches_to_unlock;
  private String weather;
  private String where_how;
  
  
  @ManyToMany(mappedBy = "donatedBugs")
  @JsonIgnoreProperties("donatedBugs")
  private Set<User> donatedByUsers = new HashSet<>();
  
  public boolean isDonatedBy(User user) {
    return donatedByUsers.contains(user);
  }
  
  public int getTotalDonations() {
    return donatedByUsers.size();
  }
}
