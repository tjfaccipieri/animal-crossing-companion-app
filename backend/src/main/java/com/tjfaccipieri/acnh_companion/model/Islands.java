package com.tjfaccipieri.acnh_companion.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_island")
@Getter
@Setter
public class Islands {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String island_name;

    @NotBlank
    private String native_fruit;

    @NotBlank
    private String hemisphere;

    @OneToOne(mappedBy = "island")
    @JsonIgnoreProperties("island")
    private User user;
    
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "island_villagers",
        joinColumns = @JoinColumn(name = "island_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "villager_id", referencedColumnName = "id")
    )
    @JsonIgnoreProperties("island")
    @Size(max = 10, message = "Cannot have more than 10 villagers on the island.")
    private Set<Villagers> villagersOnIsland = new HashSet<>();

    public void addVillager(Villagers villager) {
        if (villagersOnIsland.size() >= 10) {
            throw new IllegalArgumentException("Cannot have more than 10 villagers on the island.");
        }
        villagersOnIsland.add(villager);
    }
    
    public void removeVillager(Villagers villager) {
        villagersOnIsland.remove(villager);
    }
}
