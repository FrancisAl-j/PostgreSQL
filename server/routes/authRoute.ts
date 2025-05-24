import { Router } from "express";
import { createUser } from "../controllers/authController";

const router = Router();

// Create account for user
router.post("/create", createUser);

export default router;
