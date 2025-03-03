import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleExpenseAdded = () => {
    setRefresh((prev) => !prev); 
  };

  return (
    <div className="h-screen bg-gray-100 p-5 flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-4">Expense Tracker</h1>

      <div className="flex max-w-5xl mx-auto gap-6">

        <div className="w-1/3 flex flex-col gap-4">
          <ExpenseForm onExpenseAdded={handleExpenseAdded} />
          
          <TotalExpense refresh={refresh} />
        </div>

        <div className="w-2/3 flex flex-col gap-4">
          <ExpenseList refresh={refresh} />
        </div>
      </div>
    </div>
  );
}

export default App;
