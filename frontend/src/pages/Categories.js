import React, { useEffect, useState } from 'react';
import { getCategories, createCategory } from '../services/apiServices.js';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState({ name: '' });

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            setCategories(data);
        };
        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdCategory = await createCategory(newCategory);
        setCategories([...categories, createdCategory]);
        setNewCategory({ name: '' }); // Reset the form
    };

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Category Name" value={newCategory.name} onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })} required />
                <button type="submit">Add Category</button>
            </form>
        </div>
    );
};

export default Categories;
