import express from "express"
import { getAllMessage, newMessage } from "./controller"
import { verifyNewMessage } from "./middleware"
import multer from "multer"

const upload = multer()
const app = express()
app.use(express.json())

app.get(`/get`, getAllMessage)
app.post(`/post`, [verifyNewMessage, upload.single("")], newMessage)

export default app