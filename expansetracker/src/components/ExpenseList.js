import React, { useState, useEffect } from "react";
import { getExpenses } from "../api";
import { FaFilter } from "react-icons/fa";

const ExpenseList = ({ refresh }) => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetchExpenses();
  }, [refresh]); 

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses({});
      setExpenses(data.reverse()); 
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const filteredExpenses = expenses.filter((expense) =>
    (category === "" || expense.category.toLowerCase().includes(category.toLowerCase())) &&
    (date === "" || expense.date.split("T")[0] === date)
  );

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Expense List</h2>

        <div className="mb-4 flex space-x-3">
          <div className="relative w-1/2">
            <FaFilter className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Filter by Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="relative max-h-[465px] overflow-y-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-500 text-white sticky top-0">
              <tr>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Amount (₹)</th>
                <th className="py-2 px-4">Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.length > 0 ? (
                filteredExpenses.map((expense) => (
                  <tr key={expense._id} className="text-center border-b hover:bg-gray-100">
                    <td className="py-2 px-4">{expense.date.split("T")[0]}</td>
                    <td className="py-2 px-4">{expense.category}</td>
                    <td className="py-2 px-4">₹{expense.amount}</td>
                    <td className="py-2 px-4">{expense.description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-3 text-center text-gray-500">
                    No matching expenses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
