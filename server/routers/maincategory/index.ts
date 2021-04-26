import express, { Router } from "express";
import checkLoggedIn from "../../middleware/checkLoggedIn";
import jwtMiddleware from "../../middleware/jwtMiddleware";
import { create, read } from "./controller";

const maincategoryRouter : Router = express.Router();

maincategoryRouter.post("/", jwtMiddleware, checkLoggedIn, create);
maincategoryRouter.get("/:maincategoryId", read);

export default maincategoryRouter;
