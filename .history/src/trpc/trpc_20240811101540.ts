import { ExpressContext } from "@/server";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<ExpressContext>().create();

const middleware = t.middleware

const isAuth = miffl



export const router = t.router;



export const publicProcedure = t.procedure;
