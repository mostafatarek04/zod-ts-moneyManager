"use server";
import prisma from "@/db";
import { Method, Type } from "@prisma/client";
import { revalidatePath } from "next/cache";
import {
  transactionSchema,
  TtransactionSchema,
} from "@/schemas/transactionSchema";
import { z, ZodError } from "zod";

export async function addTransactionAction(data: TtransactionSchema) {
  console.log("gogogojg");

  const userId = "cm055yz6400008gox45sqhdnm";
  try {
    transactionSchema.parse(data);
    await prisma.transaction.create({
      data: {
        title: data.title,
        description: data.description,
        amount: data.amount,
        type: data.type as Type,
        method: data.method as Method,
        category: data.category,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    console.log("Error occured with" + error);
    if (error instanceof z.ZodError) {
      console.log(error.issues[0].message);
    }
  }
}
