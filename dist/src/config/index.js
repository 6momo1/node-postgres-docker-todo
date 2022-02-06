"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.PORT = exports.LOG_LEVEL = exports.NODE_ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV != "production") {
    const envs = dotenv_1.default.config({ path: __dirname + "../../../../.env" });
    // console.log(__dirname+'../../../.env');
    console.log(envs);
}
/* eslint no-process-env:0 */
const NODE_ENV = process.env.NODE_ENV;
exports.NODE_ENV = NODE_ENV;
// url: process.env.url,
// apiUrl: process.env.apiUrl,
const LOG_LEVEL = process.env.LOG_LEVEL;
exports.LOG_LEVEL = LOG_LEVEL;
const PORT = process.env.PORT;
exports.PORT = PORT;
const db = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    // name: process.env.DB_NAME,
};
exports.db = db;
//# sourceMappingURL=index.js.map