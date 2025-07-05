const express = require('express');
const Consultation = require('../models/Consultation');
const Loan = require('../models/Loan');
const Reviews = require('../models/Reviews');
const Subscription = require('../models/Subscription');

const router = express.Router();

router.post('/consultation', async (req, res) => {
  try {
    const data = await Consultation.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/loan', async (req, res) => {
  try {
    const data = await Loan.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/reviews', async (req, res) => {
  try {
    const data = await Reviews.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/subscribe', async (req, res) => {
  try {
    const data = await Subscription.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router; 