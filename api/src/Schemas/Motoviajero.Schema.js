import { z } from "zod";

export const RegisterSchema = z.object({
  Email_Mv: z
    .string({
      required_error: "email is required",
    })
    .email({
      message: "email is not  valid",
    }),
  Contraseña_Mv: z
    .string({
      required_error: "contraseña is required",
    })
    .min(6, {
      message: "password must be at least 6 characters",
    }),
});

export const LoginSchema = z.object({
  Email_Mv: z
    .string({
      required_error: "email is required",
    })
    .email({
      message: "email is not valid",
    }),
  Contraseña_Mv: z
    .string({
      required_error: "contraseña is required",
    })
    .min(6, {
      message: "password must be at least 6 characters",
    }),
});
