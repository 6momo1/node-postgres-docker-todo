"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
exports.default = new pg_1.Pool({
    // the maximum number of clients the pool should contain. default is 10
    max: 20,
    connectionString: 'postgres://user:password@hostname:port/dbname',
    idleTimeoutMillis: 30000
});
//# sourceMappingURL=dbconnector.js.map