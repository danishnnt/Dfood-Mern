import mongoose from "mongoose";
import validator from "validator";


const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3 ,"First Name must contain Atleast 3 Characters"],
        maxLength: [30, "First Name cannot exceed 30 Characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3 ,"Last Name must contain Atleast 3 Characters"],
        maxLength: [30, "Last Name cannot exceed 30 Characters"],
    },
    email: {
        type: String,
        required: true,
        validate:[validator.isEmail, "Provide a valid Email"]       
    },
    phone: {
        type: String,
        required: true,
        minLength: [10 ,"Phone Number must contain Atleast 10 Characters"],
        maxLength: [13 , "Phone Number cannot exceed 13 Characters"],        
    },
    time: {
        type:String,
        required:true,
    },
    date: {
        type:String,
        required:true,
    }

})

export const Finalschema = mongoose.model("Schema",schema);