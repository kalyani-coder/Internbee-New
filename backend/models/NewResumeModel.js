const mongoose = require("mongoose");

const NewResumeSchema = new mongoose.Schema({
    personalInformation: {
        firstName: {
            type: String,
            required: [true, "First name is required"]
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            validate: {
                validator: function(v) {
                    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
                },
                message: props => `${props.value} is not a valid email!`
            }
        },
        address: {
            type: String,
            default: " "
        },
        phoneNumber: {
            type: String,
            required: [true, "Phone number is required"],
            validate: {
                validator: function(v) {
                    return /^\d{10}$/.test(v);
                },
                message: props => `${props.value} is not a valid phone number!`
            }
        },
        gender: {
            type: String,
            required: [true, "Gender is required"]
        },
        currentSalary: {
            type: Number,
            default: " "
        },
        expectation: {
            type: Number,
            default: " "
        },
        careerProfile: {
            type: String,
            maxlength: [200, "Career profile cannot exceed 200 characters"],
            default: " "
        },
        skills: [{
            type: String,
            default: " "
        }],
        level: {
            type: String,
            default: " "
        }
    },
    education: {
        Name: {
            type: String,
            required: [true, "Education name is required"]
        },
        education: {
            type: String,
            required: [true, "Education field is required"]
        },
        institute: {
            type: String,
            required: [true, "Institute name is required"]
        },
        passOutYear: {
            type: String,
            required: [true, "Pass out year is required"]
        }
    },
    experience: {
        companyName: {
            type: String,
            default: " "
        },
        designation: {
            type: String,
            default: " "
        },
        location: {
            type: String,
            default: " "
        },
        aboutCompany: {
            type: String,
            default: " "
        }
    },
    portfolio: {
        projectname: {
            type: String,
            default: ""
        },
        projectDescription: {
            type: String,
            default: "",
            maxlength: [200, "Project description cannot exceed 200 characters"]
        }
    },
    StudentId: {
        type: String,
        required: [true, "Student ID is required"]
    }
});

const ResumeSchema = mongoose.model("StudentResume", NewResumeSchema);

module.exports = ResumeSchema;
