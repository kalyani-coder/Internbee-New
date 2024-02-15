const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const EmployerAuth = require("../models/EmployerAuth");
// const EmployerAuth = require("../models/employerAuth");
const EmployerAuth = require('../models/employerAuth')

const router = express.Router();
const jwtKey = "amar";
const nodemailer = require('nodemailer');

// router.post("/signup", async (req, res) => {
//   const { empName, email, number, password, companyAddress, Description, 
//     paymentStatus, accountHolderName, packagePrice, purchacepackageEndDate, 
//     purchacepackageDate,searches,
//     internshipEnquiry,
//     verifiedApplication,
//     ResumeView,
//     dedicatedCRM ,
//     internshipCounter,
//     Privacy_policy,
//     resumeDownloadCounter,} =
//     req.body;

//   try {
//     const existingempName = await EmployerAuth.findOne({ empName });
//     const existingUser = await EmployerAuth.findOne({ email });
//     const existingNumber = await EmployerAuth.findOne({ number });

//     if (existingUser) {
//       return res.status(409).json({ error: "User already exists" });
//     } else if (existingNumber) {
//       return res.status(409).json({ error: "Number already exists" });
//     } else if (existingempName) {
//       return res.status(409).json({ error: "Comapany Name already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newEmpAuth = new EmployerAuth({
//       empName: empName,
//       email: email,
//       number: number,
//       password: hashedPassword,
//       companyAddress: companyAddress,
//       Description: Description,
//       paymentStatus: paymentStatus,
//       accountHolderName: accountHolderName,
//       packagePrice: packagePrice,
//       purchacepackageEndDate: purchacepackageEndDate,
//       purchacepackageDate: purchacepackageDate,
//       searches: searches,
//       internshipEnquiry: internshipEnquiry,
//       verifiedApplication: verifiedApplication,
//       ResumeView: ResumeView,
//       dedicatedCRM: dedicatedCRM,
//       internshipCounter : internshipCounter,
//       Privacy_policy : Privacy_policy,
//       resumeDownloadCounter : resumeDownloadCounter,
//     });

//     const createdEmpAuth = await newEmpAuth.save();
//     // const token = jwt.sign({ email: createdEmpAuth.email }, jwtKey);

//     // Return the token and created user's ID in the response
//     res.json({
//       userId: createdEmpAuth._id,
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });


// sending email to employer for registration 
// router.post("/signup", async (req, res) => {
//   const {
//     empName,
//     email,
//     number,
//     password,
//     companyAddress,
//     Description,
//     paymentStatus,
//     accountHolderName,
//     packagePrice,
//     purchacepackageEndDate,
//     purchacepackageDate,
//     searches,
//     internshipEnquiry,
//     verifiedApplication,
//     ResumeView,
//     dedicatedCRM,
//     internshipCounter,
//     Privacy_policy,
//     resumeDownloadCounter,
//   } = req.body;

//   try {
//     const existingEmpName = await EmployerAuth.findOne({ empName });
//     const existingUser = await EmployerAuth.findOne({ email });
//     const existingNumber = await EmployerAuth.findOne({ number });

//     if (existingUser) {
//       return res.status(409).json({ error: "User already exists" });
//     } else if (existingNumber) {
//       return res.status(409).json({ error: "Number already exists" });
//     } else if (existingEmpName) {
//       return res.status(409).json({ error: "Company Name already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newEmpAuth = new EmployerAuth({
//       empName: empName,
//       email: email,
//       number: number,
//       password: hashedPassword,
//       companyAddress: companyAddress,
//       Description: Description,
//       paymentStatus: paymentStatus,
//       accountHolderName: accountHolderName,
//       packagePrice: packagePrice,
//       purchacepackageEndDate: purchacepackageEndDate,
//       purchacepackageDate: purchacepackageDate,
//       searches: searches,
//       internshipEnquiry: internshipEnquiry,
//       verifiedApplication: verifiedApplication,
//       ResumeView: ResumeView,
//       dedicatedCRM: dedicatedCRM,
//       internshipCounter: internshipCounter,
//       Privacy_policy: Privacy_policy,
//       resumeDownloadCounter: resumeDownloadCounter,
//     });

//     const createdEmpAuth = await newEmpAuth.save();

//     // Send welcome email to the registered employer
//     const transporter = nodemailer.createTransport({
//       host: "bulk.smtp.mailtrap.io",
//       port: 587,
//       auth: {
//         user: "api",
//         pass: "3654cc89cd6851318ac5989aaac06799"
//       }
//     });

//     const mailOptions = {
//       from: '<mailtrap@internsbee.com>',
//       to: email,
//       subject: 'Welcome to Internsbee - Registration Successful',
//       text: `Dear ${empName},
    
//       Welcome to Internsbee! Your registration was successful. We're excited to have you on board. At Internsbee, we strive to connect employers like you with talented individuals seeking opportunities.
      
//       Thank you for choosing Internsbee. We look forward to helping you find the perfect candidates for your company's needs.
      
//       Best Regards,
//       Internsbee Team`,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log('Welcome email sent to', email);

//     // Return the registered employer's ID in the response
//     res.json({
//       userId: createdEmpAuth._id,
//     });
//   } catch (error) {
//     console.error('Error signing up employer:', error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// otp on sing then thanking email afetr verify otp 


router.post("/signup", async (req, res) => {
  const {
    empName,
    email,
    number,
    password,
    companyAddress,
    Description,
    paymentStatus,
    accountHolderName,
    packagePrice,
    purchacepackageEndDate,
    purchacepackageDate,
    searches,
    internshipEnquiry,
    verifiedApplication,
    ResumeView,
    dedicatedCRM,
    internshipCounter,
    Privacy_policy,
    resumeDownloadCounter,
  } = req.body;

  try {
    const existingEmpName = await EmployerAuth.findOne({ empName });
    const existingUser = await EmployerAuth.findOne({ email });
    const existingNumber = await EmployerAuth.findOne({ number });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    } else if (existingNumber) {
      return res.status(409).json({ error: "Number already exists" });
    } else if (existingEmpName) {
      return res.status(409).json({ error: "Company Name already exists" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      host: "bulk.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: "api",
        pass: "3654cc89cd6851318ac5989aaac06799"
      }
    });

    const mailOptions = {
      from: '<mailtrap@internsbee.com>',
      to: email,
      subject: 'OTP for Employer Registration',
      text: `Dear ${empName},
    
      Your OTP for employer registration at Internsbee is: ${otp}.
      
      Please use this OTP to complete your registration process.
      
      Best Regards,
      Internsbee Team`,
    };

    await transporter.sendMail(mailOptions);
    console.log('OTP sent to', email);

    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmpAuth = new EmployerAuth({
      empName: empName,
      email: email,
      number: number,
      password: hashedPassword,
      companyAddress: companyAddress,
      Description: Description,
      paymentStatus: paymentStatus,
      accountHolderName: accountHolderName,
      packagePrice: packagePrice,
      purchacepackageEndDate: purchacepackageEndDate,
      purchacepackageDate: purchacepackageDate,
      searches: searches,
      internshipEnquiry: internshipEnquiry,
      verifiedApplication: verifiedApplication,
      ResumeView: ResumeView,
      dedicatedCRM: dedicatedCRM,
      internshipCounter: internshipCounter,
      Privacy_policy: Privacy_policy,
      resumeDownloadCounter: resumeDownloadCounter,
      signupotp: otp // Saving OTP to the database
    });

    const createdEmpAuth = await newEmpAuth.save();

    // Return the registered employer's ID in the response
    res.json({
      userId: createdEmpAuth._id,
    });
  } catch (error) {
    console.error('Error signing up employer:', error);
    res.status(500).json({ error: "Something went wrong" });
  }
});


router.post("/registrationemail", async (req, res) => {
  const { email, empName } = req.body;

  const transporter = nodemailer.createTransport({
    host: "bulk.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: "3654cc89cd6851318ac5989aaac06799"
    }
  });

  const welcomeMailOptions = {
    from: '<mailtrap@internsbee.com>',
    to: email,
    subject: 'Welcome to Internsbee - Registration Successful',
    text: `Dear ${empName},

    Welcome to Internsbee! Your registration was successful. We're excited to have you on board. At Internsbee, we strive to connect employers like you with talented individuals seeking opportunities.
    
    Thank you for choosing Internsbee. We look forward to helping you find the perfect candidates for your company's needs.
    
    Best Regards,
    Internsbee Team`,
  };

  // Send the welcome email
  transporter.sendMail(welcomeMailOptions, (error, info) => {
    if (error) {
      console.error('Error sending welcome email:', error);
      res.status(500).json({ error: "Error sending welcome email" });
    } else {
      console.log('Welcome email sent successfully:', info.response);
      res.status(200).json({ message: "Welcome email sent successfully" });
    }
  });
});



router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const empAuth = await EmployerAuth.findOne({ email });

    if (!empAuth) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, empAuth.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ email }, jwtKey);

    res.json({
      userId: empAuth._id,
      empName: empAuth.empName,
      email: empAuth.email,
      number: empAuth.number,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// working email for otp 

// router.post("/signin", async (req, res) => {
//   const { email } = req.body;

//   try {
//     const empAuth = await EmployerAuth.findOne({ email });

//     if (!empAuth) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Generate OTP
//     const otp = Math.floor(100000 + Math.random() * 900000); 

//     // Send OTP via email
//     const transporter = nodemailer.createTransport({
//       host: "bulk.smtp.mailtrap.io",
//       port: 587,
//       auth: {
//         user: "api",
//         pass: "3654cc89cd6851318ac5989aaac06799"
//       }
//     });

//     const mailOptions = {
//       from: '<mailtrap@internsbee.com>',
//       to: email,
//       subject: 'Verification Code for Sign In',
//       text: `Your verification code is: ${otp}`
//     };

//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');

//     // Update the employer's OTP in the database
//     await EmployerAuth.findOneAndUpdate({ email }, { otp });

//     res.json({ userId: empAuth._id, email });

//   } catch (error) {
//     console.error('Error signing in:', error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// this route for send verification otp on mail 
// router.post("/signin", async (req, res) => {
//   const { email } = req.body;

//   try {
//     const empAuth = await EmployerAuth.findOne({ email });

//     if (!empAuth) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Generate OTP
//     const otp = Math.floor(100000 + Math.random() * 900000); 

//     // Send OTP via email
//     const transporter = nodemailer.createTransport({
//       host: "bulk.smtp.mailtrap.io",
//       port: 587,
//       auth: {
//         user: "api",
//         pass: "3654cc89cd6851318ac5989aaac06799"
//       }
//     });

//     const mailOptions = {
//       from: '<mailtrap@internsbee.com>',
//       to: email,
//       subject: 'Verification Code for Sign In',
//       text: `Your verification code is: ${otp}`
//     };

//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');

//     // Update the employer's OTP in the database
//     await EmployerAuth.findOneAndUpdate({ email }, { otp });

//     // Respond with the user ID and email
//     res.json({ userId: empAuth._id, email });

//   } catch (error) {
//     console.error('Error signing in:', error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });


router.patch("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const { otp } = req.body;

  try {
    // Find the employer by userId
    const employer = await EmployerAuth.findById(userId);

    if (!employer) {
      return res.status(404).json({ error: 'Employer not found' });
    }

    // Update the employer's OTP
    employer.otp = otp;
    await employer.save();

    res.json({ message: 'OTP updated successfully', employer });

  } catch (error) {
    console.error('Error updating OTP:', error);
    res.status(500).json({ error: "Something went wrong" });
  }
});


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const empAuth = await EmployerAuth.findById(id);
    res.status(200).json(empAuth);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedEmpAuth = await EmployerAuth.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedEmpAuth);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const empAuth = await EmployerAuth.findByIdAndDelete(id);
    res.status(200).json({ message: "Employer Delete Successfully" });

  } catch (e) {
    res.status(500).json({ error: "Something went wrong" });
  }
})

router.get("/", async (req, res) => {
  try {
    const employerAuth = await EmployerAuth.find();
    res.status(200).json(employerAuth);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});








module.exports = router;






