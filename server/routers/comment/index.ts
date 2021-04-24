import express, { Router } from "express";
import checkOwnerComment from "../../middleware/checkOwnerComment";
import checkLoggedIn from "../../middleware/checkLoggedIn";
import jwtMiddleware from "../../middleware/jwtMiddleware";
import { write, read, remove } from "./controller";

const commentRouter : Router = express.Router();

commentRouter.get("/:postId", read);
commentRouter.post("/:postId", jwtMiddleware, checkLoggedIn, write);
commentRouter.delete("/:postId/:commentId", jwtMiddleware, checkLoggedIn, checkOwnerComment, remove);

export default commentRouter;
