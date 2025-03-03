import React, { useState } from "react";
import { addExpense } from "../api";

const ExpenseForm = ({ onExpenseAdded }) => {
  const [expense, setExpense] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExpense(expense);
    setExpense({ amount: "", category: "", date: "", description: "" });
    onExpenseAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <input type="number" name="amount" value={expense.amount} onChange={handleChange} placeholder="Amount" required className="w-full p-2 border rounded" />
      <input type="text" name="category" value={expense.category} onChange={handleChange} placeholder="Category" required className="w-full p-2 border rounded" />
      <input type="date" name="date" value={expense.date} onChange={handleChange} required className="w-full p-2 border rounded" />
      <input type="text" name="description" value={expense.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
