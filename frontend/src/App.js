import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions'; // Import the Transactions page
import Budgets from './pages/Budgets'; // Import the Budgets page
import Categories from './pages/Categories'; // Import the Categories page
import Users from './pages/Users'; // Import the Users page
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header /> {/* Header for your application */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page as default */}
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} /> {/* Add Transactions route */}
        <Route path="/budgets" element={<Budgets />} /> {/* Add Budgets route */}
        <Route path="/categories" element={<Categories />} /> {/* Add Categories route */}
        <Route path="/users" element={<Users />} /> {/* Add Users route */}
      </Routes>
    </Router>
  );
}

export default App;
