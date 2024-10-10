package com.jayrajgajul.personal_finance_tracker.controller;

import com.jayrajgajul.personal_finance_tracker.model.Transaction;
import com.jayrajgajul.personal_finance_tracker.model.TransactionType; // Import your enum
import com.jayrajgajul.personal_finance_tracker.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public ResponseEntity<List<Transaction>> getAllTransactions() {
        return new ResponseEntity<>(transactionService.getAllTransactions(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction) {
        return new ResponseEntity<>(transactionService.createTransaction(transaction), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable Long id) {
        Optional<Transaction> transactionOptional = transactionService.getTransactionById(id);
        return transactionOptional
                .map(transaction -> new ResponseEntity<>(transaction, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable Long id) {
        transactionService.deleteTransaction(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<Transaction>> getTransactionsByCategory(@PathVariable Long categoryId) {
        return new ResponseEntity<>(transactionService.getTransactionsByCategory(categoryId), HttpStatus.OK);
    }

    @GetMapping("/date-range")
    public ResponseEntity<List<Transaction>> getTransactionsByDateRange(
            @RequestParam LocalDate startDate,
            @RequestParam LocalDate endDate) {
        return new ResponseEntity<>(transactionService.getTransactionsByDateRange(startDate, endDate), HttpStatus.OK);
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Transaction>> getTransactionsByType(@PathVariable TransactionType type) { // Change to TransactionType
        return new ResponseEntity<>(transactionService.getTransactionsByType(type), HttpStatus.OK);
    }

    @GetMapping("/total/category/{categoryId}/type/{type}")
    public ResponseEntity<Double> getTotalByCategoryAndType(@PathVariable Long categoryId, @PathVariable TransactionType type) { // Change to TransactionType
        Double total = transactionService.getTotalByCategory(categoryId, type);
        return new ResponseEntity<>(total, HttpStatus.OK);
    }
}
