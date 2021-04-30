import express, { Router } from "express";
import { like, readlike, likecomment } from "./controller";
import jwtMiddleware from '../../middleware/jwtMiddleware'
import checkLoggedIn from "../../middleware/checkLoggedIn";
import checkLike from "../../middleware/checkLike";

const likeRouter : Router = express.Router();

likeRouter.post("/post/:postId/:userId", jwtMiddleware, checkLoggedIn, checkLike, like);
likeRouter.get("/post/:postId/:userId", jwtMiddleware, checkLoggedIn, checkLike, readlike);
likeRouter.post("/comment/:commentId/:userId", jwtMiddleware, checkLoggedIn, checkLike, likecomment);

export default likeRouter;
