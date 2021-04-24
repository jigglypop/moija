import express, { Router } from "express";
import { read } from "./controller";

const categoryRouter : Router = express.Router();

categoryRouter.get("/:categoryId", read);
export default categoryRouter;
