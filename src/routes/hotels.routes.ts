import express, { NextFunction, Request, Response } from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel";
import { Hotel } from "../models/Hotels";
import { createError } from "../utils/Error";

export const hotelsRoute = express.Router()


hotelsRoute.post("/", createHotel)

hotelsRoute.put("/:id",  updateHotel)

hotelsRoute.delete("/:id",  deleteHotel)

hotelsRoute.get("/:id", getHotel)

hotelsRoute.get("/", getAllHotel)