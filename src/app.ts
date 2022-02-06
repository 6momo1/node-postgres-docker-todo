import server from "./server";
import dotenv from "dotenv";

if (process.env.NODE_ENV != "production") {
  dotenv.config({path:__dirname+'../../../.env'});
  // console.log(__dirname+'../../../.env');
}

const port = parseInt(process.env.PORT || "4000");

const starter = new server().start(port).then((port: number) => {
  console.log(`Running on port ${port}`);
});

export default starter;
