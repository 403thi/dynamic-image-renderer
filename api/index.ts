import express from "express"
import cors from "cors"
import routes from "../src/routes"
import "ejs"

class App {
    express: express.Application

    constructor () {
        this.express = express()
        this.engineConfig()
        this.middlewares()
        this.routes()
    }

    engineConfig() {
        this.express.set('view engine', 'ejs')
        this.express.set('views', __dirname+'/../src/views')
    }

    middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }

    routes(){
        this.express.use(routes)
    }
}

export default new App().express