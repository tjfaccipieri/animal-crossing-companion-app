package com.tjfaccipieri.acnh_companion.repository;

import com.tjfaccipieri.acnh_companion.model.Bugs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BugsRepository extends JpaRepository<Bugs, String> {
}
