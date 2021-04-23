import express from "express";
import { list } from "./controller";

const postRouter : any = express.Router();
postRouter.get("/", list);

export default postRouter;
