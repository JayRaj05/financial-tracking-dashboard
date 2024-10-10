package com.jayrajgajul.personal_finance_tracker.repository;

import com.jayrajgajul.personal_finance_tracker.model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BudgetRepository extends JpaRepository<Budget, Long> {
}
