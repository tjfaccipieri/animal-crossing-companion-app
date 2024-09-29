package com.tjfaccipieri.acnh_companion.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_arts")
@Getter
@Setter
public class Arts {
  @Id
  private String id;
  private String name;
  private String image;
  private String hiResTexture;
  private String genuine;
  private String category;
  private Long buyPrice;
  private Long sellPrice;
  private String color1;
  private String color2;
  private String size;
  private String realArtworkTitle;
  private String artist;
  private String description;
  private String source;
  private String sourceNotes;
  private Long hhaBasePoints;
  private String hhaConcept1;
  private String hhaConcept2;
  private String hhaSeries;
  private String hhaSet;
  private String interact;
  private String tag;
  private String speakerType;
  private String lightingType;
  private String catalog;
  private String unlocked;
  private Boolean donated;
}
