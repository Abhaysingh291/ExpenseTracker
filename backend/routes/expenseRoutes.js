const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// Add a new expense
router.post("/", async (req, res) => {
  try {
    const { amount, category, date, description } = req.body;
    const newExpense = new Expense({ amount, category, date, description });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all expenses (with optional filters)
router.get("/", async (req, res) => {
  try {
    let query = {};
    if (req.query.category) query.category = req.query.category;
    if (req.query.date) query.date = new Date(req.query.date);
    const expenses = await Expense.find(query);
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get total expenses for a date range
router.get("/total", async (req, res) => {
  try {
    const { start, end } = req.query;
    const total = await Expense.aggregate([
      { $match: { date: { $gte: new Date(start), $lte: new Date(end) } } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    res.json({ total: total.length > 0 ? total[0].total : 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
