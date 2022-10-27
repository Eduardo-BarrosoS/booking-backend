import express, { NextFunction, Request, Response } from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user";

export const usersRoute = express.Router()

usersRoute.get("/checkauthentication", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello user, you are logged in")
})

usersRoute.put("/:id",  updateUser)

usersRoute.delete("/:id",  deleteUser)

usersRoute.get("/:id", getUser)

usersRoute.get("/", getAllUser)