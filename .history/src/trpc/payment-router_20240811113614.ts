import { z } from "zod";
import { privateProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { getPayloadClient } from "../get-payload";
import { stripe } from "../lib/stripe";

export const paymentRouter = router({
  createSession: privateProcedure
    .input(z.object({ productIds: z.array(z.string()) }))
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx;
      let { productIds } = input;

      if (productIds.length === 0) {
        throw new TRPCError({ code: "BAD_REQUEST" });
      }

      const payload = await getPayloadClient();

      const { docs: products } = await payload.find({
        collection: "products",
        where: {
          id: {
            in: productIds,
          },
        },
      });

      const filteredProducts = products.filter((prod) => Boolean(prod.priceId));

      const order = await payload.create({
        collection: "orders",
<<<<<<< ⌬ Tabnine Instruct <<<<<<<
‌data: {
‌          _isPaid: false,
‌          products: filteredProducts,
‌          user: user.id,
‌        },
​products: filteredProducts.map((prod) => ({
​  id: prod.id,
​  name: prod.name,
​  price: prod.price,
​  category: prod.category,
​  product_files: prod.product_files,
​  // Add other properties if needed
​})),
>>>>>>> ⌬ Tabnine Instruct >>>>>>>
      });

      try {
        const stripeSession = await stripe.checkout.sessions.create({
          success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId`,
        });
      } catch (err) {}
    }),
});
