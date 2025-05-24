import dotenv from "dotenv";
dotenv.config();

export const checkEnv = () => {
  const envVariables = ["dbname"];
  envVariables.forEach((key) => {
    if (!process.env[key]) {
      return;
    }
  });
};
