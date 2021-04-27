import express, { Router } from "express";
import { read } from "./controller";

const locationRouter : Router = express.Router();

locationRouter.get("/:maincategoryId/:locationname", read);

export default locationRouter;
