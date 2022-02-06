import dotenv from "dotenv";

if (process.env.NODE_ENV != "production") {
  const envs = dotenv.config({ path: __dirname + "../../../../.env" });
  // console.log(__dirname+'../../../.env');
  console.log(envs);
}

/* eslint no-process-env:0 */

const NODE_ENV = process.env.NODE_ENV;
// url: process.env.url,
// apiUrl: process.env.apiUrl,
const LOG_LEVEL = process.env.LOG_LEVEL;
const PORT = process.env.PORT;

const db = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  // name: process.env.DB_NAME,
};
export {
  NODE_ENV,
  LOG_LEVEL,
  PORT,
  db
};
