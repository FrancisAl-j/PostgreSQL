import { Router } from "express";
import { createUser, getUsers } from "../controllers/authController";

const router = Router();

// Create account for user
router.post("/create", createUser);

// Fetching
router.get("/get", getUsers);

export default router;
