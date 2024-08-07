import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
.then( () => {
    console.log("Connected to mongodb")
})
.catch((error) => {
    console.log("Mngodb connection error ", error.message)
})

const app = express()

app.listen(3000, () => {
    console.log(`Server started on port 3000`)
})