import { Router } from "express"
import ImageController from "./controllers/ImageController"

const router = Router()

router.get('/api', ImageController.index)

export default router