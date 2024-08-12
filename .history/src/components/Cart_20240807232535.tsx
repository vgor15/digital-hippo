"use client"

import { ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"

const Cart = () => {
    return <Sheet>
        <SheetTrigger><ShoppingCart className="h-6 w-6 flex-shrink-0" /></SheetTrigger>
    </Sheet>
}

export default Cart