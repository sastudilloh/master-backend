import express, { Application, Request, Response } from "express";
import diaryRouter from './routes/app';

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (req, res) => {
    console.log('someone pinged here!!')
    res.send('pong')
})

app.use('/api/app', diaryRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})