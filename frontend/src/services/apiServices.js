import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Adjust the port if necessary

// Transaction API
export const getTransactions = async () => {
    try {
        const response = await axios.get(`${API_URL}/transactions`);
        return response.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error; // Rethrow the error if you want to handle it later
    }
};

export const createTransaction = async (transaction) => {
    try {
        const response = await axios.post(`${API_URL}/transactions`, transaction);
        return response.data;
    } catch (error) {
        console.error('Error creating transaction:', error);
        throw error;
    }
};

// Budget API
export const getBudgets = async () => {
    try {
        const response = await axios.get(`${API_URL}/budgets`);
        return response.data;
    } catch (error) {
        console.error('Error fetching budgets:', error);
        throw error;
    }
};

export const createBudget = async (budget) => {
    try {
        const response = await axios.post(`${API_URL}/budgets`, budget);
        return response.data;
    } catch (error) {
        console.error('Error creating budget:', error);
        throw error;
    }
};

// Category API
export const getCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const createCategory = async (category) => {
    try {
        const response = await axios.post(`${API_URL}/categories`, category);
        return response.data;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
};

// User API
export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const createUser = async (user) => {
    try {
        const response = await axios.post(`${API_URL}/users`, user);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};
