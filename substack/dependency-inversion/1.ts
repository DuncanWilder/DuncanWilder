import mysql from "mysql2/promise";
import Logger from "../services/logger";

async function query(query: string, values: any[] = []): Promise<any[]> {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: "utf8mb4",
    });
    const [results] = await connection.query(query, values);
    connection.end();
    return results as any[];
  } catch (error) {
    const loggerError = new Error(error.code);
    loggerError.name = "DbQueryError";
    Logger.error(error);
    return [];
  }
}

async function transaction(functionToRun) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: "utf8mb4",
  });
  try {
    await connection.beginTransaction();
    const result = await functionToRun();
    await connection.commit();

    return result;
  } catch (error) {
    connection.rollback();
    const loggerError = new Error(error.code);
    loggerError.name = "DbTransactionError";
    Logger.error(error);
  } finally {
    connection.end();
  }
}

const database = {
  query,
  transaction,
};

export default database;
