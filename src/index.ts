import express from "express"
import cors from "cors"

import messageRouter from "./router"

const app = express()
app.use(cors())

app.use(`/message`, messageRouter)

app.listen(4000, () => {
    console.log(`Server berjalan di port 4000`)
})