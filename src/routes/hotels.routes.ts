import express, { RequestHandler, Response } from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel";
import { verifyAdmin } from "../utils/verifyToken";

export const hotelsRoute = express.Router()


hotelsRoute.post("/", verifyAdmin as RequestHandler, createHotel)

hotelsRoute.put("/:id", verifyAdmin as RequestHandler,  updateHotel)

hotelsRoute.delete("/:id", verifyAdmin as RequestHandler,  deleteHotel)

hotelsRoute.get("/:id",  getHotel)

hotelsRoute.get("/",  getAllHotel)