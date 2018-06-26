// import * as path from "path"
import * as express from "express"
import * as cors from "cors"

import Newsletter from "./api/Newsletter"

const app = express()

app.use(cors())
app.use(express.json())

app.post("/api/newsletter", Newsletter.newsletter)

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
