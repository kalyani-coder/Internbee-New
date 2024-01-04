const express  = require('express');
const EmployerAuth = require("../models/EmployerAuth");

const router = express.Router();    


router.get("/", async (req, res) => {
    try {
        const employerAuth = await EmployerAuth.find();
        res.status(200).json(employerAuth);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

})

module.exports = router;    