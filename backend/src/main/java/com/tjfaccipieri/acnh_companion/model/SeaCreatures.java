package com.tjfaccipieri.acnh_companion.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_sea_creatures")
@Getter
@Setter
public class SeaCreatures {
  @Id
  private String id;
  private String name;
  private Boolean donated;
  private String iconImage;
  private String critterpediaImage;
  private String furnitureImage;
  private Long sellPrice;
  private String shadow;
  private String movementSpeed;
  private Long totalCatchesToUnlock;
  private String spawnRates;
  private String nhJan;
  private String nhFeb;
  private String nhMar;
  private String nhApr;
  private String nhMay;
  private String nhJun;
  private String nhJul;
  private String nhAug;
  private String nhSep;
  private String nhOct;
  private String nhNov;
  private String nhDec;
  private String shJan;
  private String shFeb;
  private String shMar;
  private String shApr;
  private String shMay;
  private String shJun;
  private String shJul;
  private String shAug;
  private String shSep;
  private String shOct;
  private String shNov;
  private String shDec;
  private String size;
  private String surface;
  private String description;
  private String catchPhrase;
  private Long hhaBasePoints;
  private String hhaCategory;
  private String color1;
  private String color2;
  private String lightingType;
  private String unlocked;
  
}
