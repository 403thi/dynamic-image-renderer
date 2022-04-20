import { Router } from "express"


const router = Router()

router.get('/api', (req, res)=>{
    
    let height = req.query.height || 300
    height = (height >= 300 && height <= 1000) ?
                height 
                : 300

    const {
        text,
        desc,
        textColor,
        bgColor,
    } = req.query

    res.render('main', {
        text: text           || 'dynamic!',
        desc: desc           || 'a open source project',
        textColor: textColor || '#000000',
        bgColor: bgColor     || '#dedede',
        height: height,
    })
})

export default router