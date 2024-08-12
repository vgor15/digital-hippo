"use client"

import { ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"

const Cart = () => {
    return <Sheet>
        <SheetTrigger><ShoppingCart  /></SheetTrigger>
    </Sheet>
}

export default Cart