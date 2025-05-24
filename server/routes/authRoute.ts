import { Router } from "express";
import { createUser, getUser, getUsers } from "../controllers/authController";

const router = Router();

// Create account for user
router.post("/create", createUser);

// Fetching
router.get("/get", getUsers);
router.get("/get/:id", getUser);

export default router;
