package com.jayrajgajul.personal_finance_tracker.repository;

import com.jayrajgajul.personal_finance_tracker.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
