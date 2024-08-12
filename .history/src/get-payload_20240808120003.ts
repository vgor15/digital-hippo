import dotenv from "dotenv"
import path from "path"


dotenv.config({
    path: path.resolve(__dirname, "../.env") 
})

let ca


export const getPayloadClient = async () => {}