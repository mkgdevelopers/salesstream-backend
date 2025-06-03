const express = require('express');
const router = express.Router();
const Nightmare = require('../models/Nightmare');

// GET all nightmares
router.get('/', async (req, res) => {
  try {
    const data = await Nightmare.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// (Optional) POST new nightmare
router.post('/', async (req, res) => {
  const newNightmare = new Nightmare(req.body);
  try {
    const saved = await newNightmare.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
