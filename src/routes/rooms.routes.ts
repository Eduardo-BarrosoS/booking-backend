import express, { Request, Response } from "express";

export const roomsRoute = express.Router()

roomsRoute.get("/", (req: Request, res:Response) => {
    res.json("Hollo this is my  third endpoint")
})

roomsRoute.get("/rooms", (req: Request, res:Response) => {
    res.json("Hollo this is my register endpoint")
})