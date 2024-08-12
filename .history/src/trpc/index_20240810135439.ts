import { z } from "zod";
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  auth: authRouter,

  getInfiniteProducts: publicProcedure.input(z.object({
    lim
  }))
});

export type AppRouter = typeof appRouter;
