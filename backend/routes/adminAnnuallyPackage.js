const express = require('express')
const router = express.Router()
const adminAnnuallyPackageSchema = require('../models/adminAnnuallyPackages')

router.get('/', async (req, res) => {
    try {
        const adminAnnuallyPackage = await adminAnnuallyPackageSchema.find()
        res.json(adminAnnuallyPackage)
    } catch (err) {
        res.json({ message: err })
    }

})

router.post('/', async (req, res) => {
    const adminAnnuallyPackage = new adminAnnuallyPackageSchema({
        searches: req.body.searches,
        annuallyPackage_Price: req.body.annuallyPackage_Price,
        internship_enquiry : req.body.internship_enquiry,
        verified_appication: req.body.verified_appication,
        resume_view: req.body.resume_view,
        dedicated_crm: req.body.dedicated_crm
    })
    try {
        const savedAdminAnnuallyPackage = await adminAnnuallyPackage.save()
        res.json(savedAdminAnnuallyPackage)
    } catch (err) {
        res.json({ message: err })
    }

})

// router.patch('/:id', async (req, res) => {
//     try {
//         const updatedAdminAnnuallyPackage = await adminAnnuallyPackageSchema.updateOne(
//             { _id: req.params.id },
//             { $set: {
//                 searches: req.body.searches,
//                 annuallyPackage_Price: req.body.annuallyPackage_Price,
//                 internship_enquiry : req.body.internship_enquiry,
//                 verified_appication: req.body.verified_appication,
//                 resume_view: req.body.resume_view,
//                 dedicated_crm: req.body.dedicated_crm
//             }
//         })
//         res.json(updatedAdminAnnuallyPackage)
//     } catch (err) {
//         res.json({ message: err })
//     }

// })

router.patch("/:id", async (req, res) => {
    const packageId = req.params.id;
    try {
      const updatedService = await adminAnnuallyPackageSchema.findByIdAndUpdate(
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

router.delete("/:id", async (req, res) => {
    const packageId = req.params.id;
  
    try {
      const deletedPackage = await adminAnnuallyPackageSchema.findByIdAndDelete(packageId);
      if (!deletedPackage) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.json({ message: "Package deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router
