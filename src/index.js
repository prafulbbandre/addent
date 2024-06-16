// require('dotenv').config({path: '/.env'})
import dotenv from "dotenv";
import { app } from "./app.js";


// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import express from "express";


dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running atport: 
        ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("Mongo db connnection failed", err)
    })




// ; (async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERR:", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR", error)
//         throw err
//     }
// })()