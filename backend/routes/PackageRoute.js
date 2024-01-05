const express = require("express");
const router = express.Router();
const packageSchemaNew = require("../models/PackagesModel"); // Adjust the path accordingly



router.get("/", async (req, res) => {
  const packages = await packageSchemaNew.find();
  res.json(packages);
})


// get by userId 
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const userPackage = await packageSchemaNew.findOne({ userId });

    if (!userPackage) {
      return res.status(404).json({ error: "User package not found" });
    }

    res.json(userPackage);
  } catch (error) {
    console.error("Error fetching user package:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.post('/packages', async (req, res) => {
//   try {
//     const {
      
//       cvv,
//       accountHolderName,
//       cardNumber,
//       expiryDate,
//       payment_request,
//       userEmail,
//       userId

//     } = req.body;

//     // You may want to perform additional validation on the received data

//     const newPackage = new packageSchemaNew({
    
//       cvv,
//       accountHolderName,
//       cardNumber,
//       expiryDate,
//       payment_request,
//       userEmail,
//       userId,

//     });

//     await newPackage.save();

//     res.status(201).json({ message: 'Package information saved successfully' });
//   } catch (error) {
//     console.error('Error saving package information:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// router.patch("/:id", async (req, res) => {
//     const packageId = req.params.id;
  
//     try {
//       const updatedPackage = await packageSchemaNew.findByIdAndUpdate(
//         packageId,
//         {
//           $set: req.body, // Use the request body to update fields
//         },
//         { new: true }
//       );
  
//       if (!updatedPackage) {
//         return res.status(404).json({ message: "Package not found" });
//       }
  
//       res.json(updatedPackage);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });


router.post('/', async (req, res) => {
  const {  accountHolderName, email,userId,empName,number ,payment_status} = req.body;
  try {
    const existingUser = await packageSchemaNew.findOne({ userId });

    if (existingUser) {
      // User already exists, send a response indicating that the user has already subscribed
      res.status(400).json({ error: 'User already subscribed' });
      return;
    }

  
  // Create a new package
  const newPackage = new packageSchemaNew({
    // cardNumber,
    accountHolderName,
    // expiryDate,
    // cvv,
    email,
    userId,
    empName,
    number,
    payment_status,

  });

 
    // Save the new package to the database
    await newPackage.save();
    res.status(201).json({ message: 'Package created successfully' });
  } catch (error) {
    console.error('Error creating package:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.patch("/:packageId", async (req, res) => {
  const packageId = req.params.packageId;
  const { payment_status } = req.body;

  try {
    const updatedPackage = await packageSchemaNew.findByIdAndUpdate(
      packageId,
      { payment_status },
      { new: true } // to return the updated document
    );

    if (!updatedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }

    res.json(updatedPackage);
  } catch (error) {
    console.error("Error updating package:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



router.delete("/:id", async (req, res) => {
    const packageId = req.params.id;
  
    try {
      const deletedPackage = await packageSchemaNew.findByIdAndDelete(packageId);
      if (!deletedPackage) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.json({ message: "Package deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
