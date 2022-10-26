import express, { Request, Response } from "express";
import { Hotel } from "../models/Hotels";

export const hotelsRoute = express.Router()


hotelsRoute.post("/", async (req: Request, res:Response) => {
    const newHotel = new Hotel(req.body)
    try{
        const saveHotel = newHotel.save()
        res.status(200).json(saveHotel)
    } catch (err) {
        res.status(500).json(err)
    }
    res.json("Hollo this is my  third endpoint")
})

hotelsRoute.put("/",  async (req: Request, res:Response) => {
    const newHotel = new Hotel(req.body)
    try{
        const saveHotel = newHotel.save()
        res.status(200).json(saveHotel)
    } catch (err) {
        res.status(500).json(err)
    }
    res.json("Hollo this is my  third endpoint")
})

hotelsRoute.get("/",  async (req: Request, res:Response) => {
    const newHotel = new Hotel(req.body)
    try{
        const saveHotel = newHotel.save()
        res.status(200).json(saveHotel)
    } catch (err) {
        res.status(500).json(err)
    }
    res.json("Hollo this is my  third endpoint")
})

hotelsRoute.get("/hotels",  async (req: Request, res:Response) => {
    const newHotel = new Hotel(req.body)
    try{
        const saveHotel = newHotel.save()
        res.status(200).json(saveHotel)
    } catch (err) {
        res.status(500).json(err)
    }
    res.json("Hollo this is my  third endpoint")
})