import express, { Router } from "express";
import checkOwner from "../../middleware/checkOwner";
import checkLoggedIn from "../../middleware/checkLoggedIn";
import jwtMiddleware from "../../middleware/jwtMiddleware";
import { write, read, update, remove } from "./controller";

const postRouter : Router = express.Router();

postRouter.get("/:postId", read);
postRouter.post("/:categoryId", jwtMiddleware, checkLoggedIn, write);
postRouter.patch("/:postId", jwtMiddleware, checkLoggedIn, checkOwner, update);
postRouter.delete("/:postId", jwtMiddleware, checkLoggedIn, checkOwner, remove);

export default postRouter;
