import mongoose from "mongoose";

export const Db = () => {
  mongoose.connect(process.env.MONGO_URI ,{
    dbName : "foody",
  }).then(() => {
    console.log("connected to database")
  }).catch(err => {
    console.log(`Error While DataBase Connection ${err}`)
  })   
}



