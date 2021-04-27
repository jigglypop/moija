import express, { Router } from "express";
import checkLoggedIn from "../../middleware/checkLoggedIn";
import jwtMiddleware from "../../middleware/jwtMiddleware";
import { create, read, readall, readgroup } from "./controller";

const maincategoryRouter : Router = express.Router();

maincategoryRouter.post("/", jwtMiddleware, checkLoggedIn, create);
maincategoryRouter.get("/:maincategoryId", read);
maincategoryRouter.get("/", readall);
maincategoryRouter.get("/all/:maincategoryId", readgroup);

export default maincategoryRouter;
