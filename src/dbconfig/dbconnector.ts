import { Pool } from 'pg';
import {db} from '../config'
// import envs from '../config/config'

export default new Pool ({
    // the maximum number of clients the pool should contain. default is 10
    user: db.user,
    host: db.host,
    database: 'postgres',
    password: db.password,
    max: 20,
    // connectionString: 'postgres://user:password@hostname:port/dbname',
    idleTimeoutMillis: 30000
});