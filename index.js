import express from 'express'
import 'dotenv/config'
import dbConnect from './config/db.config'

const app = express()
const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
    dbConnect()
    console.log(`Server is running at post: ${PORT}`)
})