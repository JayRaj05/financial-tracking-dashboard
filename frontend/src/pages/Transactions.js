import React, { useEffect, useState } from 'react';
import { getTransactions, createTransaction } from '../services/apiServices.js';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [newTransaction, setNewTransaction] = useState({ amount: '', categoryId: '', type: '' });

    useEffect(() => {
        const fetchTransactions = async () => {
            const data = await getTransactions();
            setTransactions(data);
        };
        fetchTransactions();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdTransaction = await createTransaction(newTransaction);
        setTransactions([...transactions, createdTransaction]);
        setNewTransaction({ amount: '', categoryId: '', type: '' }); // Reset the form
    };

    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>{transaction.amount} - {transaction.type}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Amount" value={newTransaction.amount} onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })} required />
                <input type="text" placeholder="Category ID" value={newTransaction.categoryId} onChange={(e) => setNewTransaction({ ...newTransaction, categoryId: e.target.value })} required />
                <input type="text" placeholder="Type" value={newTransaction.type} onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })} required />
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
};

export default Transactions;
