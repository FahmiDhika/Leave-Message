import express from "express"

import messageRouter from "./router"

const app = express()

app.use(`/message`, messageRouter)

app.listen(4000, () => {
    console.log(`Server berjalan di port 4000`)
})