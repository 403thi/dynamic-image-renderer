import express from "express"
import cors from "cors"

class App {
    express: express.Application

    constructor () {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }

    routes(){
        this.express.get('/api', (req, res) => {
            res.send("Hello, World!")
        })
    }
}

export default new App().express