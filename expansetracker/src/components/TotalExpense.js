import React, { useState, useEffect } from "react";
import { getTotalExpenses } from "../api";

const TotalExpense = ({ refresh }) => {
  const [total, setTotal] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchTotal = async () => {
    try {
      const totalAmount = await getTotalExpenses(startDate, endDate);
      setTotal(totalAmount.total);
    } catch (error) {
      console.error("Error fetching total expenses:", error);
    }
  };

  useEffect(() => {
    fetchTotal();
  }, [refresh, startDate, endDate]);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
      <h3 className="text-lg font-semibold">Total Expense</h3>
      

      <div className="flex space-x-2 my-2">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="p-2 border rounded"
        />
      </div>


      <p className="text-2xl font-bold text-blue-600">₹{total}</p>
    </div>
  );
};

export default TotalExpense;
