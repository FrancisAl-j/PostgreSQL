import { Sequelize } from "sequelize";

// Setup for connecting on PostgreSQL
export const sequelize = new Sequelize(
  process.env.dbname!,
  process.env.user!,
  process.env.password!,
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false,
    schema: "public",
  }
);
