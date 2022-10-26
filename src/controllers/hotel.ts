import { Request, Response, NextFunction } from "express";
import { Hotel } from "../models/Hotels";

export const createHotel = async(req: Request, res: Response, next: NextFunction) => {
    const newHotel = new Hotel(req.body)
    try{
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (err) {
        next(err)
    }
}

export async function updateHotel(req: Request, res: Response, next: NextFunction) {
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true })
        res.status(200).json(updateHotel)
    } catch (err) {
        next(err)
    }
}

export async function deleteHotel(req: Request, res: Response, next: NextFunction) {
    try{
        await Hotel.findByIdAndDelete(req.params.id)
       res.status(200).json("Hotel deleted")
   } catch (err) {
       next(err)
   }
}

export async function getHotel(req: Request, res: Response, next: NextFunction) {
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}

export async function getAllHotel(req: Request, res: Response, next: NextFunction) {
    try{
        const hotel = await Hotel.find()
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}

