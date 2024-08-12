import { publicProcedure, router } from "./trpc";

export const AppRouter = router({
    anyApiRoute: publicProcedure.query(() =>{
        return "hello"
    }),
})