import express, { NextFunction, Request, Response } from "express";
import { Hotel } from "../models/Hotels";
import { createError } from "../utils/Error";

export const hotelsRoute = express.Router()


hotelsRoute.post("/", async (req: Request, res:Response) => {
    const newHotel = new Hotel(req.body)
    try{
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

hotelsRoute.put("/:id",  async (req: Request, res:Response) => {
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true })
        res.status(200).json(updateHotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

hotelsRoute.delete("/:id",  async (req: Request, res:Response) => {
    try{
         await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

hotelsRoute.get("/:id",  async (req: Request, res:Response) => {
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        res.status(500).json(err)
    }
})



hotelsRoute.get("/",  async (req: Request, res:Response, next: NextFunction) => {
    try{
        const hotel = await Hotel.find()
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
})