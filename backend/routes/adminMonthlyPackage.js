const express = require('express');
const router = express.Router();
const adminMonthlyPackage = require("../models/adminMonthlyPackage")

router.get('/', async (req, res) => {
    try{
        const monthlyPackage = await adminMonthlyPackage.find()
        res.status(200).send(monthlyPackage)
    }catch(e){
        res.status(500).send({message : "Internal server error"})
    }
})
router.post('/', (req, res) => {
    try{
        const monthlyPackage = new adminMonthlyPackage(req.body)
        monthlyPackage.save()
        res.status(200).send(monthlyPackage)
    }catch(e){
        res.status(500).send({message : "Internal server error"})
    
    }
})

module.exports = router;