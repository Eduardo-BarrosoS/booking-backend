import express, { Request, Response, ErrorRequestHandler } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { authRoute } from "./routes/auth.routes";
import { hotelsRoute } from "./routes/hotels.routes";
import { usersRoute } from "./routes/users.routes";
import { roomsRoute } from "./routes/rooms.routes";


const app = express()
dotenv.config()

async function connect() {
    const url = process.env.MONGO as string
    try {
        await mongoose.connect('mongodb+srv://eduardo:74031036@cluster0.nbvpqsi.mongodb.net/booking?retryWrites=true&w=majority')
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB Disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB Connected")
})

app.get("/", (req: Request, res: Response) => {
    res.send("Hollo my friends")
})



app.use(express.json())

app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/hotels", hotelsRoute)
app.use("/rooms", roomsRoute)

app.use(((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
    return res.status(500).json("")
}) as ErrorRequestHandler)

app.listen(3000, () => {
    connect()
})