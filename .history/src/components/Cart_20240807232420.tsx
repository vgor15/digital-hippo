"use client"

import { ShoppingBag, ShoppingCart } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"

const Cart = () => {
    return <Sheet>
        <SheetTrigger><ShoppingBag /></SheetTrigger>
    </Sheet>
}

export default Cart