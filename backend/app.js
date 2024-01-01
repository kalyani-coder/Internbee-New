const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
apiRouter = express.Router();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const employerRoutes = require("./routes/employerRoutes");
const postInternship = require('./routes/postInternship');
const studentsDetails = require('./routes/StudentsDetails');
const Resume = require('./routes/Resume');



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

const app = express();
app.use(cors());
app.use(express.json());


app.use("/auth", authRoutes); // Mount authentication routes
app.use("/users", userRoutes); // Mount user-related routes
app.use("/employers", employerRoutes); // Mount employer-related routes"

apiRouter.use("/postinternship" , postInternship)

apiRouter.use("/studentsdetails" , studentsDetails)

apiRouter.use("/resume" , Resume)


app.use('/api', apiRouter)

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000/");
});
