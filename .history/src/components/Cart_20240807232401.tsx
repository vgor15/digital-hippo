"use client"

import { ShoppingCart } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"

const Cart = () => {
    return <Sheet>
        <SheetTrigger><ShoppingCart</SheetTrigger>
    </Sheet>
}

export default Cart