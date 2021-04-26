import express from "express";
import groupRouter from "./group";
import postRouter from './post'
import userRouter from "./user";
import categoryRouter from "./category";
import commentRouter from "./comment";
import followRouter from "./follow";
import likeRouter from "./like";
import maincategoryRouter from "./maincategory";

const rootRouter = express();

rootRouter.use('/post', postRouter)
rootRouter.use('/user', userRouter)
rootRouter.use('/group', groupRouter)
rootRouter.use('/category', categoryRouter)
rootRouter.use('/comment', commentRouter)
rootRouter.use('/follow', followRouter)
rootRouter.use('/like', likeRouter)
rootRouter.use('/maincategory', maincategoryRouter)

export default rootRouter;
