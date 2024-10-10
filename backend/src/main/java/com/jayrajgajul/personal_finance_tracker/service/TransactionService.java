package com.jayrajgajul.personal_finance_tracker.service;

import com.jayrajgajul.personal_finance_tracker.model.Transaction;
import com.jayrajgajul.personal_finance_tracker.model.TransactionType; // Import your TransactionType enum
import com.jayrajgajul.personal_finance_tracker.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public Transaction createTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    public Optional<Transaction> getTransactionById(Long id) {
        return transactionRepository.findById(id);
    }

    public void deleteTransaction(Long id) {
        transactionRepository.deleteById(id);
    }

    public List<Transaction> getTransactionsByCategory(Long categoryId) {
        return transactionRepository.findByCategoryId(categoryId);
    }

    public List<Transaction> getTransactionsByDateRange(LocalDate startDate, LocalDate endDate) {
        return transactionRepository.findByTransactionDateBetween(startDate, endDate); // Correct method call
    }

    public List<Transaction> getTransactionsByType(TransactionType type) { // Change to TransactionType
        return transactionRepository.findByType(type); // Pass TransactionType enum
    }

    public Double getTotalByCategory(Long categoryId, TransactionType type) { // Change to TransactionType
        return transactionRepository.sumAmountByCategoryAndType(categoryId, type); // Pass TransactionType enum
    }
}
