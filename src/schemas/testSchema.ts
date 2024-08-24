import { z } from "zod";

export const testSchema = z.object({
  name: z.string(),
  title: z.string().min(3, { message: "please enter 10 characters or more" }),
});

export type TtestSchema = z.infer<typeof testSchema>;
