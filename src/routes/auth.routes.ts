import express, { Request, Response } from "express";

export const authRoute = express.Router()

authRoute.get("/", (req: Request, res:Response) => {
    res.json("Hollo this is my  third endpoint")
})

authRoute.get("/register", (req: Request, res:Response) => {
    res.json("Hollo this is my register endpoint")
})