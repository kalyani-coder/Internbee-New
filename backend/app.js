const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
apiRouter = express.Router();
const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const employerRoutes = require("./routes/employerRoutes");
const postInternship = require('./routes/postInternship');
const studentsDetails = require('./routes/StudentsDetails');
const Resume = require('./routes/Resume');
const empAuthRoutes  = require('./routes/empAuthRoutes');
const ImapgeUpload = require('./routes/UploadImagePdf')
const applyInternship = require('./routes/applyInternship');


const bodyParser = require("body-parser");
const multer = require('multer');

app.use(bodyParser.json({ limit: "10mb" }));


app.use('/public', express.static('public'));

// for storing image path 
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });


mongoose
  .connect(
    "mongodb+srv://amardippadghan2:admin123@cluster0.5avn1xf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });




app.use("/auth", authRoutes); // Mount authentication routes
app.use("/users", userRoutes); // Mount user-related routes
app.use("/employers", employerRoutes); // Mount employer-related routes"

apiRouter.use("/postinternship" , postInternship)

apiRouter.use("/studentsdetails" , studentsDetails)

apiRouter.use("/resume" , Resume)

apiRouter.use("/empauth" , empAuthRoutes)

apiRouter.use("/imageupload", ImapgeUpload)
apiRouter.use("/applyInternship", applyInternship)

app.use('/api', apiRouter)

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000/");
});
