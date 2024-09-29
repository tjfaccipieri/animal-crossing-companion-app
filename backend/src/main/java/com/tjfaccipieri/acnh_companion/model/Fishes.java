package com.tjfaccipieri.acnh_companion.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_fishes")
@Getter
@Setter
public class Fishes {
  @Id
  private String id;
  private int critterpediaOrder;
  private String name;
  private Boolean donated;
  private String catchDifficulty;
  private String catchPhrase;
  private String color1;
  private String color2;
  private String critterpediaImage;
  private String description;
  private String furnitureImage;
  private Long hhaBasePoints;
  private String hhaCategory;
  private String iconImage;
  private String lightingType;
  private Long cjSellPrice;
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
  private Long sell;
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
  private String shadowSize;
  private String size;
  private String spawnRates;
  private String surface;
  private Long totalCatchesToUnlock;
  private String vision;
  private String whereHow;
}
