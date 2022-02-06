import { Pool } from 'pg';
// import envs from '../config/config'

export default new Pool ({
    // the maximum number of clients the pool should contain. default is 10
    user: process.env.USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    max: 20,
    // connectionString: 'postgres://user:password@hostname:port/dbname',
    idleTimeoutMillis: 30000
});