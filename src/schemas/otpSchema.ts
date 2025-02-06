import { z } from "zod";

export const otpSchema = z.object({
  otp1: z.string().length(1, "Each OTP field must be 1 digit"),
  otp2: z.string().length(1, "Each OTP field must be 1 digit"),
  otp3: z.string().length(1, "Each OTP field must be 1 digit"),
  otp4: z.string().length(1, "Each OTP field must be 1 digit"),
});

export type OTPFormData = z.infer<typeof otpSchema>;
