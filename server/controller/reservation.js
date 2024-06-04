// import ErrorHandler from "../error/error.js";
// import { Finalschema } from "..models/schema.js";

// export const sendReservation = async (req,res,next) => {
//    const { firstName , lastName , email , phone , date , time } = req.body; 
//    if( !firstName || !lastName || !email || !phone || !date || !time ) {
//     return next (new ErrorHandler("please fill the complete form", 400))
//    }
//    try {
//    await Finalschema.create(firstName , lastName , email , phone , date , time);
//    res.status(201).json({
//     sucess:true,
//     messege:"meggege sent sucessfully"
//    })  
//    } catch (error) {
//     if(error.name === "ValidationError") {
//         const validationErrors = Object.values(error.errors).map(
//             (err) => err.messege 
//     )
//     return next (new ErrorHandler(validationErrors.join(" , ") , 400 ))
//     }
//     return next(error);
//    }
// }

import ErrorHandler from "../error/error.js";
import { Finalschema } from "../models/schema.js";

export const sendReservation = async (req, res, next) => {
   const { firstName, lastName, email, phone, date, time } = req.body; 
   
   // Validate required fields
   if (!firstName || !lastName || !email || !phone || !date || !time) {
       return next(new ErrorHandler("Please fill the complete form", 400));
   }

   try {
       // Create a new reservation document
       await Finalschema.create({ firstName, lastName, email, phone, date, time });
       res.status(201).json({
           success: true,
           message: "Message sent successfully"
       });
   } catch (error) {
       if (error.name === "ValidationError") {
           // Handle validation errors
           const validationErrors = Object.values(error.errors).map(
               (err) => err.message
           );
           return next(new ErrorHandler(validationErrors.join(", "), 400));
       }
       // Handle other errors
       return next(error);
   }
}