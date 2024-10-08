"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useState } from "react"

const NavItems = () =>{
    const [activeIndex, setActiveIndex] = useState<null | number>(null)





    return(
     
        <div className="flex gap-4 h-full">
            {PRODUCT_CATEGORIES.map((category,i)=> {
               const handleOpen = () =>{
                    if(activeIndex === i){
                        setActiveIndex(null)
                    } else{
                        setActiveIndex(i)
                    }
               }

               const isOpen = i === activeIndex

            return("")
        })}
        </div>
    )
}

export default NavItems