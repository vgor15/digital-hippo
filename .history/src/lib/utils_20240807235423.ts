import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "INR" | "EUR",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const {currency = "INR" , notation = "compact"} = options

  const numericPrice = typeof price === "string" ? parseFloat(price) : price

  return new Intl.n
}