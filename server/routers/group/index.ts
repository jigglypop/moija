import express, { Router } from "express";
import setProfileIdByUser from "../../middleware/setProfileIdByUser";
import checkLoggedIn from "../../middleware/checkLoggedIn";
import jwtMiddleware from "../../middleware/jwtMiddleware";
import { create, join, read, readpost } from "./controller";

const groupRouter : Router = express.Router();

groupRouter.post("/:locationId", jwtMiddleware, checkLoggedIn, setProfileIdByUser, create);
groupRouter.get("/:groupId", read);
groupRouter.post("/:profileId/:groupId", jwtMiddleware, checkLoggedIn, join);
groupRouter.get("/post/:categoryId", readpost);

export default groupRouter;
