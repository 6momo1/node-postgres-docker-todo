import express, {Application, Router } from 'express'
import bodyParser from 'body-parser'
import todosRouter from './routers/TodosRouter'
import pool from './dbconfig/dbconnector'

class Server {
    private app

    constructor() {

    }
    private config() {
        this.app.use('/todos', todosRouter)
    }

    private dbConnect() {

    }

    private routeronfig() {

    }

    public start = (port: number) => {
        return new Promise(( resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err:Object) => reject(err))
        })
    }
}

export default Server