"use client"

import { useState } from "react"
import {queryClient} from ""
 
const Providers = () => {
    const [queryClient] = useState(() => new queryClient)
}

export default Providers