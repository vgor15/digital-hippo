"use client";

import { ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            0
        </span>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="spacy"></SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
