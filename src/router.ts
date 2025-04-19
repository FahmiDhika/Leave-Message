import express from "express"
import { getAllMessage, newMessage } from "./controller"
import { verifyNewMessage } from "./middleware"

const app = express()
app.use(express.json())

app.get(`/get`, getAllMessage)
app.post(`/post`, [verifyNewMessage], newMessage)

export default app