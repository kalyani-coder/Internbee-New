const express = require('express');
const router = express.Router();

// Import your mongoose models
const { StudentsMonthlyPackage, StudentsFreePackage } = require('../models/studentMonthlypackage');

// Route for handling operations related to studentsMonthlyPackage
router.get('/students-monthly-package', async (req, res) => {
    try {
        const monthlyPackages = await StudentsMonthlyPackage.find();
        res.json(monthlyPackages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/students-monthly-package', async (req, res) => {
    try {
        const monthlyPackage = await StudentsMonthlyPackage.create(req.body);
        res.status(201).json(monthlyPackage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.patch('/students-monthly-package/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedMonthlyPackage = await StudentsMonthlyPackage.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedMonthlyPackage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Route for handling operations related to studentsFreePackage
router.get('/students-free-package', async (req, res) => {
    try {
        const freePackages = await StudentsFreePackage.find();
        res.json(freePackages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/students-free-package', async (req, res) => {
    try {
        const freePackage = await StudentsFreePackage.create(req.body);
        res.status(201).json(freePackage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.patch('/students-free-package/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedFreePackage = await StudentsFreePackage.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedFreePackage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// You can add more routes for other operations (POST, PUT, DELETE, etc.) as needed

module.exports = router;
