import { buildConfig } from "payload/config";
import {mongooseAdapter} from "@payloadcms/db-mongodb"
export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections: [],
    routes: {
        admin: "/sell"
    },
    admin:{},
    editor: slateEditor({}),
    db: mongooseAdapter()
})