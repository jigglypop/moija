import express, { Router } from "express";
import checkLoggedIn from "../../middleware/checkLoggedIn";
import jwtMiddleware from "../../middleware/jwtMiddleware";
import { read, readuser, update } from "./controller";

const profileRouter : Router = express.Router();

profileRouter.get("/:profileId", read);
profileRouter.get("/user/:userId", readuser);
profileRouter.patch("/:profileId", jwtMiddleware, checkLoggedIn, update);

export default profileRouter;
