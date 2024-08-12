import dotenv from "dotenv"
import path from "path"
import { Type } from "lucide-react"

dotenv.config({
    path: path.resolve(__dirname, "../.env") 
})

let cached = (global as any).payload

if(!cached){
    cached = (global as any).payload =  {
        client: null,
        promise: null,

    }
}

interface Args {
    initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async ({initOptions}: Args) => {}