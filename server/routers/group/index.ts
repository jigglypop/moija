import express, { Router } from "express";
import checkLoggedIn from "../../middleware/checkLoggedIn";
import jwtMiddleware from "../../middleware/jwtMiddleware";
import { create, read } from "./controller";

const groupRouter : Router = express.Router();

groupRouter.post("/", jwtMiddleware, checkLoggedIn, create);
groupRouter.get("/:groupId", read);

export default groupRouter;
