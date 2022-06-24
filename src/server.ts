import app from '../api';

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    console.log('running in http://localhost:' + PORT)
})