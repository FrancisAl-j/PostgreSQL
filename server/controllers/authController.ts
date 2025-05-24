import { Request, Response } from "express";
import bcrypt, { hashSync } from "bcryptjs";
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name) {
    res.status(400).json({ message: "Name field required." });
    return;
  }
  if (!email) {
    res.status(400).json({ message: "Email field required." });
    return;
  }
  if (password.trim().length < 8) {
    res
      .status(400)
      .json({ message: "Password should have more than 8 characters." });
    return;
  }

  const hashedPassword = hashSync(password, 10);
  try {
    const user = {
      email,
      name,
      password: hashedPassword,
    };

    await User.create(user);

    res.status(201).json({ message: "Account created successfully." });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
