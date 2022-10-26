import { NextFunction, Request, Response } from "express";
import { IUser, User } from "../models/Users";
import bcrypt from "bcryptjs"
import { createError } from "../utils/Error";
// import jwt from "jsonwebtoken"

export async function register(req: Request, res: Response, next: NextFunction) {

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body?.password, salt);

       const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
       } as IUser)
       await newUser.save()
        res.status(200).send("User has been saved")
    } catch (err) {
        next(err)
    }
}

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const user =  await User.findOne({username: req.body.username})
        if(!user) return next(createError(404, "User not found"))
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createError(400, "Wrong password or username!"))

        const { password, isAdmin, ...otherDetails} = user._doc;
        res.status(200).send(otherDetails)
    } catch (err) {
        next(err)
    }
}


