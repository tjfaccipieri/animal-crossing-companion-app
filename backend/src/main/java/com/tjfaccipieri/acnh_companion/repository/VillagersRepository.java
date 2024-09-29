package com.tjfaccipieri.acnh_companion.repository;

import com.tjfaccipieri.acnh_companion.model.Villagers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VillagersRepository extends JpaRepository<Villagers, String> {
  public List<Villagers> findAllBySpeciesContainingIgnoreCase(String species);
}
