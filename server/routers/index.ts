import express from "express";
import groupRouter from "./group";
import postRouter from './post'
import userRouter from "./user";
import categoryRouter from "./category";

const rootRouter = express();

rootRouter.use('/post', postRouter)
rootRouter.use('/user', userRouter)
rootRouter.use('/group', groupRouter)
rootRouter.use('/category', categoryRouter)

export default rootRouter;
