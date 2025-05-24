import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

// connectDb
import { connectDb } from "./utils/connectDb";

// Routers
import authRoute from "./routes/authRoute";

const app = express();
app.use(express.json());
app.use(cors());

// API Endpoints
app.use("/api/auth", authRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
  connectDb();
});
