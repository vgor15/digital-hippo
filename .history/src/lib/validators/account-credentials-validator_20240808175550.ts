import { z } from "zod";

const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 character long." }),
  });

  type TAuthCredenntialsValidator = z.infer<typeof AuthCredentialsValidator>;
