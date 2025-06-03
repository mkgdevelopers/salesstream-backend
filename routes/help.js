const express = require('express');
const router = express.Router();
const Help = require('../models/Help');

router.post('/', async (req, res) => {
  try {
    const help = new Help(req.body);
    await help.save();
    res.status(201).json(help);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save help request' });
  }
});

module.exports = router;
