import express from "express";
import postRouter from './post'
import userRouter from "./user";

const rootRouter = express();
rootRouter.use('/post', postRouter)
rootRouter.use('/user', userRouter)
export default rootRouter;
