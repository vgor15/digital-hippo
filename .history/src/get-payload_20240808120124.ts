import dotenv from "dotenv"
import path from "path"


dotenv.config({
    path: path.resolve(__dirname, "../.env") 
})

let cached = (global as any).payload

if(!cached){
    cached = 
}


export const getPayloadClient = async () => {}