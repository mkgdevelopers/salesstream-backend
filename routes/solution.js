const express = require('express');
const router = express.Router();
const Solution = require('../models/Solution');

// Get all solutions
router.get('/', async (req, res) => {
  try {
    const solutions = await Solution.find();
    res.json(solutions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// (Optional) POST new solution
router.post('/', async (req, res) => {
  const newSolution = new Solution(req.body);
  try {
    const saved = await newSolution.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: update solution by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Solution.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating solution' });
  }
});

// DELETE: delete solution by ID
router.delete('/:id', async (req, res) => {
  try {
    await Solution.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting solution' });
  }
});


module.exports = router;