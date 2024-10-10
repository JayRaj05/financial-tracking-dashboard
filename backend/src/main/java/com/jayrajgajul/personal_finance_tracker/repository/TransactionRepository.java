package com.jayrajgajul.personal_finance_tracker.repository;

import com.jayrajgajul.personal_finance_tracker.model.Transaction;
import com.jayrajgajul.personal_finance_tracker.model.TransactionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    // Custom query to sum transaction amounts by category and type
    @Query("SELECT SUM(t.amount) FROM Transaction t WHERE t.category.id = :category AND t.type = :type")
    Double sumAmountByCategoryAndType(@Param("category") Long category, @Param("type") TransactionType type);

    List<Transaction> findByType(TransactionType type);
    List<Transaction> findByTransactionDateBetween(LocalDate startDate, LocalDate endDate);
    List<Transaction> findByCategoryId(Long categoryId);
}
