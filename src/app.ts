import server from "./server";
import dotenv from "dotenv";
import {PORT, NODE_ENV} from "./config"
// if (process.env.NODE_ENV != "production") {
//   const envs = dotenv.config({path:__dirname+'../../../.env'});
//   // console.log(__dirname+'../../../.env');
//   console.log(envs);
//   // console.log(process.env.DB_PASSWORD);  
// }



console.log(`this is a ${NODE_ENV} environment.`);

const port = parseInt( PORT || "4000")

const starter = new server().start(port).then((port: number) => {
  console.log(`Running on port ${port}`);
});

export default starter;
