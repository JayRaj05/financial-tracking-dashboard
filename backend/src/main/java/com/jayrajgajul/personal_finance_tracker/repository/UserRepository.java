package com.jayrajgajul.personal_finance_tracker.repository;

import com.jayrajgajul.personal_finance_tracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // You can define custom query methods here if needed
}
