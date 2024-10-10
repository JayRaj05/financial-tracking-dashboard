import React, { useEffect, useState } from 'react';
import { getBudgets, createBudget } from '../services/apiServices.js';

const Budgets = () => {
    const [budgets, setBudgets] = useState([]);
    const [newBudget, setNewBudget] = useState({ name: '', amount: '' });

    useEffect(() => {
        const fetchBudgets = async () => {
            const data = await getBudgets();
            setBudgets(data);
        };
        fetchBudgets();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdBudget = await createBudget(newBudget);
        setBudgets([...budgets, createdBudget]);
        setNewBudget({ name: '', amount: '' }); // Reset the form
    };

    return (
        <div>
            <h2>Budgets</h2>
            <ul>
                {budgets.map(budget => (
                    <li key={budget.id}>{budget.name} - ${budget.amount}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Budget Name" value={newBudget.name} onChange={(e) => setNewBudget({ ...newBudget, name: e.target.value })} required />
                <input type="number" placeholder="Amount" value={newBudget.amount} onChange={(e) => setNewBudget({ ...newBudget, amount: e.target.value })} required />
                <button type="submit">Add Budget</button>
            </form>
        </div>
    );
};

export default Budgets;
