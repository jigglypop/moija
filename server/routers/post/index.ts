import express, { Router } from "express";
import checkOwnerPost from "../../middleware/checkOwnerPost";
import checkLoggedIn from "../../middleware/checkLoggedIn";
import jwtMiddleware from "../../middleware/jwtMiddleware";
import { write, read, update, remove } from "./controller";

const postRouter : Router = express.Router();

postRouter.get("/:postId", read);
postRouter.post("/:categoryId", jwtMiddleware, checkLoggedIn, write);
postRouter.patch("/:postId", jwtMiddleware, checkLoggedIn, checkOwnerPost, update);
postRouter.delete("/:postId", jwtMiddleware, checkLoggedIn, checkOwnerPost, remove);

export default postRouter;
