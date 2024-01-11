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

router.patch("/:id", async (req, res) => {
    const packageId = req.params.id;
    try {
      const updatedService = await adminMonthlyPackage.findByIdAndUpdate(
        packageId,
        req.body,
        {
          new: true,
        }
      );
      res.json(updatedService);
    } catch (error) {
      res.status(404).json({ message: "Service not found" });
    }
  });

module.exports = router;