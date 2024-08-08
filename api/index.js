import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
.then( () => {
    console.log("Connected to mongodb")
})
.catch((error) => {
    console.log("Mngodb connection error ", error.message)
})

const app = express()

app.use(express.json())
app.listen(3000, () => {
    console.log(`Server started on port 3000`)
})


app.use('/api/user' , userRoutes)
app.use('/api/auth' , authRoutes)