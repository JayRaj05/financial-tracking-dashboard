package com.jayrajgajul.personal_finance_tracker.service;

import com.jayrajgajul.personal_finance_tracker.model.Budget;
import com.jayrajgajul.personal_finance_tracker.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    public List<Budget> getAllBudgets() {
        return budgetRepository.findAll();
    }

    public Budget createBudget(Budget budget) {
        return budgetRepository.save(budget);
    }

    public Budget getBudgetById(Long id) {
        return budgetRepository.findById(id).orElse(null);
    }

    public void deleteBudget(Long id) {
        budgetRepository.deleteById(id);
    }
}
