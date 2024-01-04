const express  = require('express');
const EmployerAuth = require("../models/EmployerAuth");

const router = express.Router();    

router.get("/", async (req, res) => {
  try {
    const allEmpAuth = await EmployerAuth.find();
    const formattedDetails = allEmpAuth.map((employer) => ({
      empoyerName: employer.empName,
      companyAddress: employer.companyAddress,
      Description: employer.Description,
    }));
    res.json(formattedDetails);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});


module.exports = router;    