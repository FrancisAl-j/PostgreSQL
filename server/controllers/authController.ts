import { Request, Response } from "express";
import bcrypt, { hashSync } from "bcryptjs";
import User from "../models/User";

// Creating an Account/User
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

    await User.create(user); // insert a data in table

    res.status(201).json({ message: "Account created successfully." });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// Fetching all Users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll(); // Finds all the users

    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// Fetching specific user
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);

    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
