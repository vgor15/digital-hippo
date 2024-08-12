import { AuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";
import { publicProcedure, router } from "./trpc";
import { getPayload } from "payload";

export const authRouter = router({
    createPayloadUser: publicProcedure.input(AuthCredentialsValidator).mutation(({input}) => {
        const{email, password} = input
        const payload = await getPayload
    })
})