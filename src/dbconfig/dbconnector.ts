import { Pool } from 'pg';

export default new Pool ({
    // the maximum number of clients the pool should contain. default is 10
    max: 20,
    connectionString: 'postgres://user:password@hostname:port/dbname',
    idleTimeoutMillis: 30000
});