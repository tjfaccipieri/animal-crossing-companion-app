package com.tjfaccipieri.acnh_companion.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_users")
@Getter
@Setter
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  
  @Column(unique = true, nullable = false)
  private String username;
  
  @Column(nullable = false)
  private String password;
  
  private String email;
  
  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
      name = "user_donated_bugs",
      joinColumns = @JoinColumn(name = "user_id"),
      inverseJoinColumns = @JoinColumn(name = "bug_id")
  )
  @JsonIgnoreProperties("donatedByUsers")
  private Set<Bugs> donatedBugs = new HashSet<>();
  
  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
      name = "user_donated_fishes",
      joinColumns = @JoinColumn(name = "user_id"),
      inverseJoinColumns = @JoinColumn(name = "fish_id")
  )
  @JsonIgnoreProperties("donatedByUsers")
  private Set<Fishes> donatedFishes = new HashSet<>();
  
  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
      name = "user_donated_sea_creatures",
      joinColumns = @JoinColumn(name = "user_id"),
      inverseJoinColumns = @JoinColumn(name = "sea_creature_id")
  )
  @JsonIgnoreProperties("donatedByUsers")
  private Set<SeaCreatures> donatedSeaCreatures = new HashSet<>();

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
          name = "user_donated_fossils",
          joinColumns = @JoinColumn(name = "user_id"),
          inverseJoinColumns = @JoinColumn(name = "fossil_id")
  )
  @JsonIgnoreProperties("donatedByUsers")
  private Set<Fossils> donatedFossils = new HashSet<>();

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(
          name = "user_donated_arts",
          joinColumns = @JoinColumn(name = "user_id"),
          inverseJoinColumns = @JoinColumn(name = "art_id")
  )
  @JsonIgnoreProperties("donatedByUsers")
  private Set<Arts> donatedArts = new HashSet<>();
  
  public void donateBug(Bugs bug) {
    donatedBugs.add(bug);
  }
  public void undoDonateBug(Bugs bug) {
    donatedBugs.remove(bug);
  }
  public boolean hasDonatedBug(Bugs bug) {
    return donatedBugs.contains(bug);
  }
  public int getTotalDonatedBugs() {
    return donatedBugs.size();
  }
  
  
  public void donateFish(Fishes fish) {
    donatedFishes.add(fish);
  }
  public void undoDonateFish(Fishes fish) {
    donatedFishes.remove(fish);
  }
  public boolean hasDonatedFish(Fishes fish) {
    return donatedFishes.contains(fish);
  }
  public int getTotalDonatedFishes() {
    return donatedFishes.size();
  }
  
  public void donateSeaCreature(SeaCreatures seaCreatures) {
    donatedSeaCreatures.add(seaCreatures);
  }
  public void undoDonateSeaCreatures(SeaCreatures seaCreatures) {
    donatedSeaCreatures.remove(seaCreatures);
  }
  public boolean hasDonatedSeaCreatures(SeaCreatures seaCreatures) {
    return donatedSeaCreatures.contains(seaCreatures);
  }
  public int getTotalDonatedSeaCreatures() {
    return donatedSeaCreatures.size();
  }

  public void donateFossil(Fossils fossil) {
    donatedFossils.add(fossil);
  }
  public void undoDonateFossil(Fossils fossil) {
    donatedFossils.remove(fossil);
  }
  public boolean hasDonatedFossil(Fossils fossil) {
    return donatedFossils.contains(fossil);
  }
  public int getTotalDonatedFossil() {
    return donatedFossils.size();
  }

  public void donateArt(Arts art) {
    donatedArts.add(art);
  }
  public void undoDonateArt(Arts art) {
    donatedArts.remove(art);
  }
  public boolean hasDonatedArt(Arts art) {
    return donatedArts.contains(art);
  }
  public int getTotalDonatedArt() {
    return donatedArts.size();
  }
}
