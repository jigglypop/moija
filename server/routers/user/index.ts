import express, { Router } from "express";
import { check, login, logout, register } from "./controller";
import jwtMiddleware from '../../middleware/jwtMiddleware'

const userRouter : Router = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/check", jwtMiddleware, check);
userRouter.post("/logout", logout);

export default userRouter;
