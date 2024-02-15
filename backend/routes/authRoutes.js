const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const _ = require('underscore');
const nodemailer = require('nodemailer');


const router = express.Router();
const jwtKey = "amar";

// router.post("/signup", async (req, res) => {
//   const { fullName, email, number, password, freePackagePrice, searches,
//     verified_application,
//     dedicated_crm,
//     opportunities,
//     opportunities_Counter,
//     monthlyPackage_Price,
//     monthlySearches,
//     monthlyVerifiedApplication,
//     monthlyDedicatedCRM,
//     monthlyOpportunities,
//     accountHolderName,
//    } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     const existingnumber = await User.findOne({ number });

//     if (existingUser) {
//       return res.status(409).json({ error: "User already exists" });
//     } else if (existingnumber) {
//       return res.status(409).json({ error: "Number already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       fullName: fullName,
//       email: email,
//       number: number,
//       password: hashedPassword,



//       freePackage: {
//         package_type: 'free',
//         freePackagePrice: freePackagePrice,
//         searches: searches,
//         verified_application: verified_application,
//         dedicated_crm: dedicated_crm,
//         opportunities: opportunities,
//         opportunities_Counter: opportunities_Counter,
//       },

//       monthlyPackage: {
//         package_type: 'monthly',
//         monthlyPackage_Price,
//         searches: monthlySearches,
//         verified_application: monthlyVerifiedApplication,
//         dedicated_crm: monthlyDedicatedCRM,
//         monthlyOpportunities: monthlyOpportunities,
//         accountHolderName: accountHolderName
//       },

//     });

//     const createdUser = await newUser.save();
//     const token = jwt.sign({ email: createdUser.email }, jwtKey);

//     // Return the token and created user's email in the response
//     res.json({
//       userId: createdUser._id,
//       email: createdUser.email,
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });



// router.post("/signup", async (req, res) => {
//   const {
//     fullName,
//     email,
//     number,
//     password,
//     freePackagePrice,
//     searches,
//     verified_application,
//     dedicated_crm,
//     opportunities,
//     opportunities_Counter,
//     monthlyPackage_Price,
//     monthlySearches,
//     monthlyVerifiedApplication,
//     monthlyDedicatedCRM,
//     monthlyOpportunities,
//     accountHolderName,
//   } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     const existingNumber = await User.findOne({ number });

//     if (existingUser) {
//       return res.status(409).json({ error: "User already exists" });
//     } else if (existingNumber) {
//       return res.status(409).json({ error: "Number already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       fullName,
//       email,
//       number,
//       password: hashedPassword,
//       verified: false,
//       freePackage: {
//         package_type: 'free',
//         freePackagePrice,
//         searches,
//         verified_application,
//         dedicated_crm,
//         opportunities,
//         opportunities_Counter,
//       },
//       monthlyPackage: {
//         package_type: 'monthly',
//         monthlyPackage_Price,
//         searches: monthlySearches,
//         verified_application: monthlyVerifiedApplication,
//         dedicated_crm: monthlyDedicatedCRM,
//         monthlyOpportunities,
//         accountHolderName,
//       },
//     });

//     const createdUser = await newUser.save();
//     const otp = Math.floor(100000 + Math.random() * 900000);

//     // Send welcome email to the registered user
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
//       subject: 'OTP for Student Registration',
//       text: `Dear ${fullName},
          
//              Your OTP for student registration at Internsbee is: ${otp}.
            
//              Please use this OTP to complete your registration process.
            
//              Best Regards,
//              Internsbee Team`,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log('Welcome email sent to', email);

//     // Return the user's ID and email in the response
//     res.json({
//       userId: createdUser._id,
//       email: createdUser.email,
//     });
//   } catch (error) {
//     console.error('Error signing up user:', error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// otp when students signup 

router.post("/signup", async (req, res) => {
  const {
    fullName,
    email,
    number,
    password,
    freePackagePrice,
    searches,
    verified_application,
    dedicated_crm,
    opportunities,
    opportunities_Counter,
    monthlyPackage_Price,
    monthlySearches,
    monthlyVerifiedApplication,
    monthlyDedicatedCRM,
    monthlyOpportunities,
    accountHolderName,
  } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    const existingNumber = await User.findOne({ number });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    } else if (existingNumber) {
      return res.status(409).json({ error: "Number already exists" });
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
      subject: 'OTP for Student Registration',
      text: `Dear ${fullName},

      Your OTP for student registration at Internsbee is: ${otp}.

      Please use this OTP to complete your registration process.

      Best Regards,
      Internsbee Team`,
    };

    await transporter.sendMail(mailOptions);
    console.log('OTP sent to', email);

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      number,
      password: hashedPassword,
      verified: false,
      freePackage: {
        package_type: 'free',
        freePackagePrice,
        searches,
        verified_application,
        dedicated_crm,
        opportunities,
        opportunities_Counter,
      },
      monthlyPackage: {
        package_type: 'monthly',
        monthlyPackage_Price,
        searches: monthlySearches,
        verified_application: monthlyVerifiedApplication,
        dedicated_crm: monthlyDedicatedCRM,
        monthlyOpportunities,
        accountHolderName,
      },
      signupotp: otp // Saving OTP to the database
    });

    const createdUser = await newUser.save();

    // Send welcome email to the registered user (You can keep this part as it is)

    // Return the user's ID and email in the response
    res.json({
      userId: createdUser._id,
      email: createdUser.email,
    });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// send email thanking after succefull signup 
router.post("/registrationemailstudent", async (req, res) => {
  const { email, fullName } = req.body;

  const transporter = nodemailer.createTransport({
    host: "bulk.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: "3654cc89cd6851318ac5989aaac06799"
    }
  });

  const thankYouMailOptions = {
    from: '<mailtrap@internsbee.com>',
    to: email,
    subject: 'Thank You for Registering on Internsbee',
    text: `Dear ${fullName},

    Thank you for registering on Internsbee! We are delighted to have you as part of our community. Internsbee aims to provide students like you with valuable opportunities to kickstart your career journey.
    
    Stay tuned for exciting internship opportunities and valuable resources to help you succeed in your career.
    
    Best Regards,
    Internsbee Team`,
  };

  // Send the thank-you email
  transporter.sendMail(thankYouMailOptions, (error, info) => {
    if (error) {
      console.error('Error sending thank-you email:', error);
      res.status(500).json({ error: "Error sending thank-you email" });
    } else {
      console.log('Thank-you email sent successfully:', info.response);
      res.status(200).json({ message: "Thank-you email sent successfully" });
    }
  });
});



router.patch("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { verified } = req.body;

    const user = await User.findByIdAndUpdate(userId, { verified }, { new: true });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});



router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ email }, jwtKey);

    // Include user data in the response with modified userId (_id)
    res.json({
      userId: user._id,
      email: user.email,
      number: user.number,
      verified: user.verified,
      fullName: user.fullName,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});


// router.post("/signin", async (req, res) => {
//   const { email } = req.body;
//   console.log('Received sign-in request for email:', email);

//   try {
//     const user = await User.findOne({ email });
//     console.log('User found in the database:', user);

//     if (!user) {
//       console.log('User not found');
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Generate OTP
//     const otp = Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit OTP
//     console.log('Generated OTP:', otp);

//     // Send OTP to user's email
//     const transporter = nodemailer.createTransport({
//       host: 'server.internsbee.com',
//       port: 993,
//       auth: {
//           user: 'internsbee@demo.internsbee.com',
//           pass: 'pQp3TIjINXd9'
//       }
//   });


//     const mailOptions = {
//       from: '<internsbee@demo.internsbee.com>',
//       to: email,
//       subject: 'Verification Code for Sign In',
//       text: `Your verification code is: ${otp}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         return res.status(500).json({ error: "Failed to send OTP" });
//       } else {
//         console.log('Email sent:', info.response);
//         // Redirect to OTP page with the email and OTP data
//         res.json({ email, otp });
//       }
//     });
//   } catch (error) {
//     console.error('Error signing in:', error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });




// this route for bulk emails sending for conformation 

// router.post("/signin", async (req, res) => {
//   const { email } = req.body;
//   console.log('Received sign-in request for email:', email);

//   try {

//     const user = await User.findOne({ email });

//     if (!user) {
//       console.log('User with email not found:', email);
//       return res.status(404).json({ error: 'Email not found' });
//     }
//       // Your existing code to find user and generate OTP
//       const transporter = nodemailer.createTransport({
//         host: "bulk.smtp.mailtrap.io",
//         port: 587,
//         auth: {
//           user: "api",
//           pass: "3654cc89cd6851318ac5989aaac06799"
//         }
//       });
//       // Generate OTP
//       const otp = Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit OTP
//       console.log('Generated OTP:', otp);

//       const mailOptions = {
//           from: '<mailtrap@internsbee.com>', // Replace with your desired 'from' address
//           to: email,
//           subject: 'Verification Code for Sign In',
//           text: `Your verification code is: ${otp}`
//       };

//       // Sending email
//       await transporter.sendMail(mailOptions);
//       console.log('Email sent successfully');

//       // Return success response with email and OTP
//       res.json({ email, otp });

//   } catch (error) {
//       console.error('Error signing in:', error);
//       res.status(500).json({ error: "Something went wrong" });
//   }
// });


// router.post("/signin", async (req, res) => {
//   const { email } = req.body;
//   console.log('Received sign-in request for email:', email);

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       console.log('User with email not found:', email);
//       return res.status(404).json({ error: 'Email not found' });
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

//     // const mailOptions = {
//     //   from: '<mailtrap@internsbee.com>',
//     //   to: email,
//     //   subject: 'Verification Code for Sign In',
//     //   text: `Your verification code is: ${otp}`
//     // };

//     const mailOptions = {
//       from: '<mailtrap@internsbee.com>',
//       to: email,
//       subject: 'Verification Code for Sign In',
//       text: `Welcome to Internbee – Your Gateway to Opportunities!

//     Dear User,

//     Your one-time verification code is: ${otp}

//     To complete the sign-in process, please enter this verification code on our website.

//     Best Regards,
//     Internsbee Team`,
//     };


//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');

//     await User.findOneAndUpdate({ email }, { otp });

//     res.json({ userId: user._id, email });

//   } catch (error) {
//     console.error('Error signing in:', error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });



router.patch("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const { otp } = req.body;

  try {
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.otp = otp;

    await user.save();

    res.json({ message: 'OTP updated successfully', user });

  } catch (error) {
    console.error('Error updating OTP:', error);
    res.status(500).json({ error: "Something went wrong" });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  const studentId = req.params.id;
  try {
    const user = await User.findByIdAndDelete(studentId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;

















