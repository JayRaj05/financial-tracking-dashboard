import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FaMoneyBillAlt, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { getBudgets } from '../services/apiServices.js'; // Import only the budget service

const COLORS = ['#007BFF', '#F44336'];

function Dashboard() {
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [category, setCategory] = useState('');
  const [budgetGoal, setBudgetGoal] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);

  // Fetch budgets from the backend when component mounts
  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const data = await getBudgets();
        setBudgets(data);
      } catch (error) {
        console.error('Error fetching budgets:', error);
      }
    };

    fetchBudgets();
  }, []);

  const addTransaction = () => {
    if (income || expense) {
      setTransactions([...transactions, { income: parseFloat(income), expense: parseFloat(expense), category }]);
      setIncome('');
      setExpense('');
      setCategory('');
    }
  };

  const totalIncome = transactions.reduce((total, transaction) => total + (transaction.income || 0), 0);
  const totalExpense = transactions.reduce((total, transaction) => total + (transaction.expense || 0), 0);

  const data = [
    { name: 'Income', value: totalIncome },
    { name: 'Expenses', value: totalExpense },
  ];

  return (
    <div className="dashboard-container">
      <h1>Your Financial Dashboard</h1>
      <p>Track your income and expenses here!</p>

      <h2>Add Transaction</h2>
      <div className="input-container">
        <FaArrowUp style={{ color: '#007BFF' }} />
        <input
          type="number"
          placeholder="Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <FaArrowDown style={{ color: '#e74c3c' }} />
        <input
          type="number"
          placeholder="Expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Salary">Salary</option>
        </select>
      </div>
      <button onClick={addTransaction}>Add</button>

      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <FaMoneyBillAlt style={{ marginRight: '5px' }} />
            Income: ${transaction.income}, Expense: ${transaction.expense}, Category: {transaction.category}
          </li>
        ))}
      </ul>

      <h2>Set Budget Goal</h2>
      <input
        type="number"
        placeholder="Budget Goal"
        value={budgetGoal}
        onChange={(e) => setBudgetGoal(e.target.value)}
      />

      <h2>Budgets</h2>
      <ul>
        {budgets.map((budget, index) => (
          <li key={index}>
            <strong>{budget.category}:</strong> ${budget.amount} {/* Adjust based on your budget structure */}
          </li>
        ))}
      </ul>

      <h2>Financial Overview</h2>
      <div className="metrics">
        <div className="metric">
          <h3>Total Income</h3>
          <p>${totalIncome}</p>
        </div>
        <div className="metric">
          <h3>Total Expenses</h3>
          <p>${totalExpense}</p>
        </div>
        <div className="metric">
          <h3>Savings</h3>
          <p>${totalIncome - totalExpense}</p>
        </div>
      </div>

      <div className="comparison-container">
        <div className="income-expenses">
          <h2>Income vs Expenses</h2>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="total-summary">
          <h2>Total Summary</h2>
          <p><strong>Total Income:</strong> ${totalIncome}</p>
          <p><strong>Total Expenses:</strong> ${totalExpense}</p>
          <p><strong>Net Savings:</strong> ${totalIncome - totalExpense}</p>
          {budgetGoal && (
            <p>
              <strong>{totalExpense <= budgetGoal ? 'Within Budget!' : 'Over Budget!'}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
