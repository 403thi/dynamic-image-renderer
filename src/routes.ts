import { Router, Request, Response } from "express"
import { makeImageController } from "./controllers/factories/makeImageController"

const imageController = makeImageController()

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.set('content-type', 'text/html')
    res.sendFile(__dirname+'/public/demo.html')
})

router.get('/api', imageController.handle)

export default router
