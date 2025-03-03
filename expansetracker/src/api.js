import axios from "axios";

const API_URL = "http://localhost:5000/expenses";

const apiRequest = async (method, url, data = {}, params = {}) => {
  try {
    const response = await axios({ method, url, data, params });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Expense API Calls
export const addExpense = (expense) => apiRequest("post", API_URL, expense);
export const getExpenses = (filters) => apiRequest("get", API_URL, {}, filters);
export const getTotalExpenses = (start, end) => apiRequest("get", `${API_URL}/total`, {}, { start, end });
