"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const config_1 = require("./config");
// if (process.env.NODE_ENV != "production") {
//   const envs = dotenv.config({path:__dirname+'../../../.env'});
//   // console.log(__dirname+'../../../.env');
//   console.log(envs);
//   // console.log(process.env.DB_PASSWORD);  
// }
console.log(`this is a ${config_1.PORT} environment.`);
const port = parseInt(config_1.PORT || "4000");
const starter = new server_1.default().start(port).then((port) => {
    console.log(`Running on port ${port}`);
});
exports.default = starter;
//# sourceMappingURL=app.js.map