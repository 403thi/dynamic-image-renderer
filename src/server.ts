import path from "path"
import express from "express"
import app from '../api';

const PORT = process.env.PORT || 3333

app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT, () => {
    console.log('running in http://localhost:' + PORT)
})

