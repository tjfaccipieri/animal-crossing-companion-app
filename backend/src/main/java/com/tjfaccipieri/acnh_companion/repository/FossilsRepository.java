package com.tjfaccipieri.acnh_companion.repository;

import com.tjfaccipieri.acnh_companion.model.Fossils;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FossilsRepository extends JpaRepository<Fossils, String> {
}
