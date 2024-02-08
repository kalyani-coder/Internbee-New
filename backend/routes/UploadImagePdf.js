
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const UploadFile = require('../models/UploadImagePdf'); // Import the UploadFile model

// Your Multer storage configuration
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Page: Get all services
router.get("/", async (req, res) => {
  try {
    const services = await UploadFile.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// router.post('/', upload.single('image'), async (req, res) => {
//     try {
//       if (req.file) {
//         const publicUrl = `https://backend.internsbee.com/public/uploads/${req.file.originalname}`;
         
//         const imageData = new UploadImage({
//           filename: req.file.originalname,
//           path: req.file.path,
//           serviceImage: publicUrl,
         
//         });
  
//         await imageData.save();
//         res.status(201).json(imageData);
//       } else {
//         res.status(400).json({ error: 'No file uploaded' });
//       }
//     } catch (e) {
//       res.status(500).json({ message: "Internal server error"});
//     }
//   });


router.post('/', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), async (req, res) => {
    try {
      if (req.files && req.files.image && req.files.pdf) {
        const publicImageUrl = `https://backend.internsbee.com/public/uploads/${req.files.image[0].filename}`;
        const publicPdfUrl = `https://backend.internsbee.com/public/uploads/${req.files.pdf[0].filename}`;
  
        const fileData = new UploadFile({
          filename: req.files.image[0].originalname, // Assuming image is required for every entry
          path: req.files.image[0].path,
          pdfPath: req.files.pdf[0].path,
          serviceImage: publicImageUrl,
          servicePDF: publicPdfUrl,
          serviceName : req.body.serviceName,
        });
  
        await fileData.save();
        res.status(201).json(fileData);
      } else {
        res.status(400).json({ error: 'Image and PDF files are required' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  

module.exports = router;