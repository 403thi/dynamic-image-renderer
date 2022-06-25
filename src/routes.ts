import { Router, Request, Response } from "express"
import ImageController from "./controllers/ImageController"

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.set('content-type', 'text/html')
    res.sendFile(__dirname+'/public/demo.html')
})

router.get('/api', ImageController.index)

export default router
