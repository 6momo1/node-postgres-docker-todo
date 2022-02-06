"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV != "production") {
    dotenv_1.default.config({ path: __dirname + '../../../.env' });
    console.log(__dirname + '../../../.env');
}
if (process.env.USER != "userr") {
    dotenv_1.default.config({ path: __dirname + '../../../.env' });
    console.log(__dirname + '../../../.env');
    console.log(process.env.USER);
}
console.log("process.env.NODE_ENV: ", process.env.NODE_ENV, process.env.USER);
console.log(process.env.NODE_ENV, process.env.USER, process.env.DB_HOST, process.env.DATABASE, process.env.NODE_DB_PASSWORD);
const port = parseInt(process.env.PORT || "4000");
const starter = new server_1.default().start(port).then((port) => {
    console.log(`Running on port ${port}`);
});
exports.default = starter;
//# sourceMappingURL=app.js.map