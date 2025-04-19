import express from "express"
import cors from "cors"

import messageRouter from "./router"

const app = express()
app.use(cors())

const PORT = 4000

app.use(`/message`, messageRouter)

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`)
})