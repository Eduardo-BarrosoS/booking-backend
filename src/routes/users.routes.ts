import express, { Request, Response } from "express";

export const usersRoute = express.Router()

usersRoute.get("/", (req: Request, res:Response) => {
    res.json("Hollo this is my  third endpoint")
})

usersRoute.get("/users", (req: Request, res:Response) => {
    res.json("Hollo this is my register endpoint")
})