const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// Get all enquiries
router.get('/', async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single enquiry
router.get('/:id', async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' });
    res.json(enquiry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create enquiry
router.post('/', async (req, res) => {
  const enquiry = new Enquiry({
    name: req.body.name,
    email: req.body.email,
    company: req.body.company,
    phone: req.body.phone,
    message: req.body.message,
    productInterest: req.body.productInterest
  });

  try {
    const newEnquiry = await enquiry.save();
    res.status(201).json(newEnquiry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update enquiry status
router.patch('/:id/status', async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' });
    
    if (req.body.status) enquiry.status = req.body.status;
    
    const updatedEnquiry = await enquiry.save();
    res.json(updatedEnquiry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;