import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  auth: authRouter,

  getInfiniteProducts: publicProcedure.input
});

export type AppRouter = typeof appRouter;
