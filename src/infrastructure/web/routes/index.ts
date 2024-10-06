import { Router } from "express";
import { editorialsRouter } from "./editorials/editorials.route";

const router =  Router();
router.use("/events",);
router.use("/editorials",editorialsRouter);

export {router}