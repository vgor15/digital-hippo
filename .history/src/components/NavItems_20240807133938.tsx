"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useState } from "react"

const NavItems = () =>{
    const [activeIndex, setActiveIndex] = useState<null | number>(null)





    return(
        {PRODUCT_CATEGORIES.map((categories,i)=> {})}
        <div className="flex gap-4 h-full"></div>
    )
}

export default NavItems