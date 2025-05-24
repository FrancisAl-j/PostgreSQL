import { sequelize } from "./sequelize";
import User from "../models/User";

export const connectDb = async () => {
  try {
    await sequelize.authenticate(); // Checks if it is connected to PostgreSQL
    await User.sync(); // Creates a table if there is none, then if there's a table it will just sync
    console.log("PostgreSQL connected successfully.");
    return sequelize;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    console.log("Unknown error occured");
  }
};
