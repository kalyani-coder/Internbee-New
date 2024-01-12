const express = require("express");
const mongoose = require("mongoose");
const newInterShipSchema = require("./models/postInternship");
const ExpiredInternship = require("./models/ExpiredInternship");
const cors = require("cors");
apiRouter = express.Router();
const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const employerRoutes = require("./routes/employerRoutes");
const postInternship = require("./routes/postInternship");
const studentsDetails = require("./routes/StudentsDetails");
const ExpiredInternshipRoute = require("./routes/ExpiredInternshipRoute");
const Resume = require("./routes/Resume");
const empAuthRoutes = require("./routes/empAuthRoutes");
const ImapgeUpload = require("./routes/UploadImagePdf");
const applyInternship = require("./routes/applyInternship");
const getAllEmployer = require("./routes/getAllEmployer");
const packageSchemaNew = require("./routes/PackageRoute"); // Adjust the path accordingly
const adminLoginRoute = require("./routes/adminloginRoute");
const adminBlog = require("./routes/adminBlog");
const adminMonthlyPackage = require("./routes/adminMonthlyPackage");
const adminAnnuallyPackage = require("./routes/adminAnnuallyPackage");
const SearchRoute = require("./routes/searchRoute");
const EnquiryRoute = require("./routes/enquiryRoutes");
const studentPackages = require("./routes/studentsMonthlyPackage")

const bodyParser = require("body-parser");
const multer = require("multer");

app.use(bodyParser.json({ limit: "10mb" }));

app.use("/public", express.static("public"));

// for storing image path
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
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

// app.use("/auth", authRoutes); // Mount authentication routes
// app.use("/users", userRoutes); // Mount user-related routes
// app.use("/employers", employerRoutes); // Mount employer-related routes"

apiRouter.use("/auth", authRoutes);
apiRouter.use("/users", userRoutes);
apiRouter.use("/employers", employerRoutes);

apiRouter.use("/postinternship", postInternship);

apiRouter.use("/studentsdetails", studentsDetails);

apiRouter.use("/resume", Resume);

apiRouter.use("/empauth", empAuthRoutes);
apiRouter.use("/getallemployer", getAllEmployer);

apiRouter.use("/imageupload", ImapgeUpload);
apiRouter.use("/applyInternship", applyInternship);
apiRouter.use("/packages", packageSchemaNew);
apiRouter.use("/expiredinternships", ExpiredInternshipRoute);
apiRouter.use("/adminlogin", adminLoginRoute);
apiRouter.use("/adminblog", adminBlog);
apiRouter.use("/adminmonthlypackage", adminMonthlyPackage);
apiRouter.use("/adminannuallypackage", adminAnnuallyPackage);
apiRouter.use("/search", SearchRoute);
apiRouter.use("/enquiry", EnquiryRoute);
apiRouter.use("/students", studentPackages)

app.use("/api", apiRouter);

// const handleExpiredInternships = async () => {
//   try {
//     const currentDate = new Date().toISOString().split("T")[0]; // Get current date

//     // Find internship posts where end_Date is less than the current date
//     const expiredInternships = await newInterShipSchema.find({
//       end_Date: { $lt: currentDate },
//     });

//     expiredInternships.forEach(async (internship) => {
//       const saveInternship = new ExpiredInternship(internship);
//       await saveInternship.save();
//       await newInterShipSchema.findByIdAndDelete(internship._id);

//     });

//     // Return the expired internships if needed
//     return expiredInternships;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to handle expired internships");
//   }
// };

// // Run handleExpiredInternships function every 12 hour
// setInterval(async () => {
//   try {
//     const expiredInternships = await handleExpiredInternships();
//     console.log("Expired internships handled:", expiredInternships);
//   } catch (error) {
//     console.error("Error handling expired internships:", error);
//   }
// }, 12*60*60*1000); //after 12 hours run the function again.

// Start the server

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000/");
});
