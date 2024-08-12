import { z } from "zod";
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  auth: authRouter,

  getInfiniteProducts: publicProcedure.input(z.object({
    limit: z.number().min(1).max(100),
    cursor: z.number().nullish(),
    query: QueryValidatorimport { z } from 'zod'

export const QueryValidator = z.object({
  category: z.string().optional(),
  sort: z.enum(['asc', 'desc']).optional(),
  limit: z.number().optional(),
})

export type TQueryValidator = z.infer<typeof QueryValidator>
  }))
});

export type AppRouter = typeof appRouter;
