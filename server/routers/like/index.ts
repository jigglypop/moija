import express, { Router } from "express";
import { like } from "./controller";
import jwtMiddleware from '../../middleware/jwtMiddleware'
import checkLoggedIn from "../../middleware/checkLoggedIn";
import checkLike from "../../middleware/checkLike";

const likeRouter : Router = express.Router();

likeRouter.post("/post/:postId/:userId", jwtMiddleware, checkLoggedIn, checkLike, like);
likeRouter.post("/comment/:commentId/:userId", jwtMiddleware, checkLoggedIn, checkLike, like);

export default likeRouter;
