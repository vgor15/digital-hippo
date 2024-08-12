import dotenv from "dotenv"
import path from "path"
import { cache } from "react"


dotenv.config({
    path: path.resolve(__dirname, "../.env") 
})

let cached = (global as any).payload

if(!cache)


export const getPayloadClient = async () => {}