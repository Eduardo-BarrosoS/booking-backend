import express, { NextFunction, Request, RequestHandler, Response } from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user";
import { verifyToken } from "../utils/verifyToken";

export const usersRoute = express.Router()

usersRoute.get("/checkauthentication", verifyToken as RequestHandler, (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello user, you are logged in")
})

usersRoute.get("/checkuser/:id", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello user, you are logged in")
})

usersRoute.put("/:id",  updateUser)

usersRoute.delete("/:id",  deleteUser)

usersRoute.get("/:id", getUser)

usersRoute.get("/", getAllUser)