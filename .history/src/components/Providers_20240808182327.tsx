"use client"

import { useState } from "react"
import {QueryClient} from "@tanstack/react-query"
 
const Providers = () => {
    const [queryClient] = useState(() => new queryClient)
}

export default Providers