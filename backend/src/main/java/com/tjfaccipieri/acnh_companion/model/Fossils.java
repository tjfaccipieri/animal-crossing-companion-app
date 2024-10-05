package com.tjfaccipieri.acnh_companion.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

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
  
  @Column(name = "description", columnDefinition = "text")
  private String description;
  private Long hha_base_points;
  private String color1;
  private String color2;
  private String size;
  private String source;
  private String museum;
  private String interact;
  private String catalog;

  @ManyToMany(mappedBy = "donatedFossils")
  @JsonIgnoreProperties("donatedFossils")
  private Set<User> donatedByUsers = new HashSet<>();
}
