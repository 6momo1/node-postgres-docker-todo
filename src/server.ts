import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import todosRouter from "./routers/TodosRouter";
import pool from "./dbconfig/dbconnector";
import dotenv from "dotenv";

class Server {
  private app;

  constructor() {
    dotenv.config()
    this.app = express();
    this.config();
      this.dbConnect()
    this.routeronfig();
  }

  private config() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: "1mb" })); // 100kb default
  }

  private dbConnect() {
    pool.connect((err, client, done) => {
      if (err) {
        console.log("[ERROR] Failed to connect to database.");

        throw new Error(err);
      }
      console.log(`Connected`);
    });
  }

  private routeronfig() {
    this.app.use("/todos", todosRouter);
  }

  public start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          resolve(port);
        })
        .on("error", (err: Object) => reject(err));
    });
  };
}

export default Server;
