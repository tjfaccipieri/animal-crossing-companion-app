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
}
