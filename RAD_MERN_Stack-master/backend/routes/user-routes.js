import express from "express";
import { getAllUser, login, signup } from "../controllers/user-controller";

//handle routes using express Router()
const router = express.Router();

//handle specific user routes
router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);

export default router;
