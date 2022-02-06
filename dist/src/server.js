"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodosRouter_1 = __importDefault(require("./routers/TodosRouter"));
class Server {
    constructor() {
        this.start = (port) => {
            return new Promise((resolve, reject) => {
                this.app.listen(port, () => {
                    resolve(port);
                }).on('error', (err) => reject(err));
            });
        };
    }
    config() {
        this.app.use('/todos', TodosRouter_1.default);
    }
    dbConnect() {
    }
    routeronfig() {
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map