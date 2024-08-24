"use server";
import { z } from "zod";
import { testSchema, type TtestSchema } from "@/schemas/testSchema";

export async function addTestAction(data: TtestSchema) {
  const validator = testSchema.parse(data);
  console.log(validator);
}
