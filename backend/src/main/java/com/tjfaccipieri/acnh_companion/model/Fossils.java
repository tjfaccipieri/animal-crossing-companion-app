package com.tjfaccipieri.acnh_companion.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_fossils")
@Getter
@Setter
public class Fossils {
  @Id
  private String id;
  private Boolean donated;
  private String name;
  private String image;
  private Long sell_price;
  private String fossil_group;
  private String description;
  private Long hha_base_points;
  private String color1;
  private String color2;
  private String size;
  private String source;
  private String museum;
  private String interact;
  private String catalog;
}
