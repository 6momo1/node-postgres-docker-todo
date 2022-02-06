"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = require("../config");
// import envs from '../config/config'
exports.default = new pg_1.Pool({
    // the maximum number of clients the pool should contain. default is 10
    user: config_1.db.user,
    host: config_1.db.host,
    database: 'postgres',
    password: config_1.db.password,
    max: 20,
    // connectionString: 'postgres://user:password@hostname:port/dbname',
    idleTimeoutMillis: 30000
});
//# sourceMappingURL=dbconnector.js.map