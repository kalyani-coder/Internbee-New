

const express = require('express');
const router = express.Router();
const adminBlog = require('../models/adminBlog')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    try{
        const blogs = await adminBlog.find();
        res.json(blogs);
    }catch(err){
        res.status(500).json({message : "Inyernal server Error"})
    }
})

// router.post('/', async (req, res) => {
//     try {
//         const { title, description, image } = req.body;

//         const newBlog = new adminBlog({
//             title,
//             description,
//             image
//         });

//         const savedBlog = await newBlog.save();

//         res.status(201).json(savedBlog);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Data not Submitted" });
//     }
// });


router.post('/', upload.single('image'), async (req, res) => {
    try {
      if (req.file) {
        const publicUrl = `http://localhost:8000/public/uploads/${req.file.originalname}`;
  
        const imageData = new adminBlog({
          filename: req.file.originalname,
          path: req.file.path,
          blogimage: publicUrl,
          description: req.body.description,
          title: req.body.title,
        });
  
        await imageData.save();
        res.status(201).json({ message: "Data Submitted", blogimage: publicUrl });
      } else {
        res.status(400).json({ message: "Data not Submitted" });
      }
    } catch (err) {
      res.status(500).json({ message: "Internal server Error" });
    }
  });
   

router.delete('/:id', async (req, res) => {
    try {
        const blog = await adminBlog.findByIdAndDelete(req.params.id);
        // res.json(blog);
        res.status(200).json({ message: "Data Deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Data not Deleted" });
    }

})

module.exports = router;