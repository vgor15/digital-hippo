import Stripe from 'stripe'

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ?? '',
  {
    // apiVersion: '2023-10-16',
    apiVersion: "2024-06-20",
    typescript: true,
  }
)