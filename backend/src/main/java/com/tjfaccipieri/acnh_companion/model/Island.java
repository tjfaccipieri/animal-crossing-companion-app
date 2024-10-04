package com.tjfaccipieri.acnh_companion.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_island")
@Getter
@Setter
public class Island {
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
    private User user;

}
