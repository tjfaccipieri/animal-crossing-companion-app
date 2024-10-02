package com.tjfaccipieri.acnh_companion.repository;

import com.tjfaccipieri.acnh_companion.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
