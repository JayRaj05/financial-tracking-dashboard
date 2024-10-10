package com.jayrajgajul.personal_finance_tracker.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "transactions")
public class
Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal amount; // Using BigDecimal for financial precision
    private String description;

    @Column(name = "transaction_date") // Naming the column explicitly
    private LocalDate transactionDate; // This field name should match repository query

    @Enumerated(EnumType.STRING)
    private TransactionType type; // Enum for type safety

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Foreign key for user
    private User user;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false) // Foreign key for category
    private Category category;

    // Default constructor
    public Transaction() {}

    // Parameterized constructor
    public Transaction(BigDecimal amount, String description, LocalDate transactionDate, TransactionType type, User user, Category category) {
        this.amount = amount;
        this.description = description;
        this.transactionDate = transactionDate; // Updated to transactionDate to match the field
        this.type = type;
        this.user = user;
        this.category = category;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getTransactionDate() { // Updated getter to match field name
        return transactionDate;
    }

    public void setTransactionDate(LocalDate transactionDate) { // Updated setter to match field name
        this.transactionDate = transactionDate;
    }

    public TransactionType getType() {
        return type;
    }

    public void setType(TransactionType type) {
        this.type = type;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    // toString method for debugging purposes
    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", amount=" + amount +
                ", description='" + description + '\'' +
                ", transactionDate=" + transactionDate + // Ensure this is updated
                ", type=" + type +
                ", user=" + user +
                ", category=" + category +
                '}';
    }
}
