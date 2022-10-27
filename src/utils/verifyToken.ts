import { createError } from "../utils/Error";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { IUser } from "../models/Users";

interface IReqUser extends Request {
    user: IUser
}

export function verifyToken(req: IReqUser, res: Response, next: NextFunction) {
    const token = req.cookies.access_token
    if(!token) return next(createError(401, "You are not authenticated!"))

    jwt.verify(token, process.env.JWT as string, (err: any, user: any ) => {
        if( err ) return next(createError(403, "Token is not valid!"))
        req.user = user
        next()
    })
}