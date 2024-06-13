import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"

const app = express()

//check if request to the database is from desired source only and not from anyone other than it.

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
//temp files
app.use(express.static("public"))
app.use(cookieParser())

export {app}
