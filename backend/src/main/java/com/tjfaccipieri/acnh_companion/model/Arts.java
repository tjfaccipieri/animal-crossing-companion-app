package com.tjfaccipieri.acnh_companion.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_arts")
@Getter
@Setter
public class Arts {
  @Id
  private String id;
  private String name;
  private String image;
  private String hi_res_texture;
  private String genuine;
  private String category;
  private Long buy_price;
  private Long sell_price;
  private String color1;
  private String color2;
  private String size;
  private String real_artwork_title;
  private String artist;
  private String description;
  private String source;
  private String source_notes;
  private Long hha_base_points;
  private String hha_concept_1;
  private String hha_concept_2;
  private String hha_series;
  private String hha_set;
  private String interact;
  private String tag;
  private String speaker_type;
  private String lighting_type;
  private String catalog;
  private String unlocked;

  @ManyToMany(mappedBy = "donatedArts")
  @JsonIgnoreProperties("donatedArts")
  private Set<User> donatedByUsers = new HashSet<>();
}
