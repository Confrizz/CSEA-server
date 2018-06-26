import { Request, Response, Handler } from "express"
import * as jsonexport from "jsonexport"
// import * as fs from "fs"

// let writer = fs.createWriteStream

class Newsletter {
    public static newsletter: Handler = (req: Request, res: Response) => {
        console.log(req.body
        jsonexport(req.body.json(), (err: Error, csv: string) => {
            if (err) throw err
            console.log(csv)
        }): string

        res.send("Success")
    }

}

export default Newsletter
