import express from "express";
import * as UserController from "../controllers/UserController.js";

const router = express.Router();

//User Routes

router.post("/create", UserControllers.createUserController);

export default router;