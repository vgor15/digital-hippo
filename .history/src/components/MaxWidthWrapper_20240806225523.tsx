import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWrapper = ({
    className,
    children
}:{
    className?: string
    children: ReactNode
}) => {
    return(
            {children}
        </div>
    )
}   

export default MaxWidthWrapper