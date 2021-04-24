import express, { Router } from "express";
import { follow } from "./controller";
import jwtMiddleware from '../../middleware/jwtMiddleware'
import checkLoggedIn from "../../middleware/checkLoggedIn";
import checkFollow from "../../middleware/checkFollow";

const followRouter : Router = express.Router();

followRouter.post("/:followerId/:followingId", jwtMiddleware, checkLoggedIn, checkFollow, follow);

export default followRouter;
