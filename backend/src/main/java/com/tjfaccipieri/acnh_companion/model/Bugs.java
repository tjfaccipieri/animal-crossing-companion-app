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
  private int critterpediaOrder;
  private String name;
  //private Boolean donated;
  private String catchPhrase;
  private String color1;
  private String color2;
  private String critterpediaImage;
  private String description;
  private Long flickSellPrice;
  private String furnitureImage;
  private Long hhaBasePoints;
  private String hhaCategory;
  private String iconImage;
  private String nhApr;
  private String nhAug;
  private String nhDec;
  private String nhFeb;
  private String nhJan;
  private String nhJul;
  private String nhJun;
  private String nhMar;
  private String nhMay;
  private String nhNov;
  private String nhOct;
  private String nhSep;
  private String rarity;
  private Long sellPrice;
  private String shApr;
  private String shAug;
  private String shDec;
  private String shFeb;
  private String shJan;
  private String shJul;
  private String shJun;
  private String shMar;
  private String shMay;
  private String shNov;
  private String shOct;
  private String shSep;
  private String size;
  private String spawnRates;
  private String surface;
  private Long totalCatchesToUnlock;
  private String weather;
  private String whereHow;
  
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
