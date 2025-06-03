const express = require('express');
const router = express.Router();
const Benefit = require('../models/Benefit');

// Get all benefits
router.get('/', async (req, res) => {
  try {
    const benefits = await Benefit.find();
    res.json(benefits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Optional: Add new benefit
router.post('/', async (req, res) => {
  const newBenefit = new Benefit(req.body);
  try {
    const saved = await newBenefit.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: update solution by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Benefit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating solution' });
  }
});

// DELETE: delete solution by ID
router.delete('/:id', async (req, res) => {
  try {
    await Benefit.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting solution' });
  }
});


module.exports = router;
