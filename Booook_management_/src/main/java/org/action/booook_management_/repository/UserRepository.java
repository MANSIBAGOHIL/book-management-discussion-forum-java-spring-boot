package org.action.booook_management_.repository;

import org.action.booook_management_.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
