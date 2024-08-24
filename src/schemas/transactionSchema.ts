import { date, optional, z } from "zod";

export const transactionSchema = z.object({
  id: z.string().optional(),
  title: z
    .string()
    .min(2, { message: "must be more than 2 charcters ya kosomak" }),
  description: z
    .string()
    .min(3, { message: "This also another error ya 3ars" }),
  date: z.date().optional(),
  amount: z.coerce
    .number({
      invalid_type_error: "Enter a number only",
      message: "Only Numbers are allowed",
    })
    .positive(),
  type: z.enum(["SPENDING", "INCOME"]),
  method: z.enum(["CREDIT", "CASH"]),
  category: z.string(),
});

export type TtransactionSchema = z.infer<typeof transactionSchema>;
