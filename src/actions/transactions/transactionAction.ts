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

  const userId = "cm055yz6400008gox45sqhdnm"; // Macbook
  // const userId = "cm08eeaw80000nc3soqs7e5am"; // Asus
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
    revalidatePath("/all-transactions");
  } catch (error) {
    console.log("Error occured with" + error);
    if (error instanceof z.ZodError) {
      console.log(error.issues[0].message);
    }
  }
}

export async function deleteTransactionAction(id: string) {
  const deleteTransaction = await prisma.transaction.delete({
    where: {
      id,
    },
  });
  revalidatePath("/all-transactions");
}

export async function getTransactionBySearchAction(title: string) {
  console.log("iririririjhei");

  const transactions = await prisma.transaction.findMany({
    where: {
      title: {
        contains: title,
        mode: "insensitive",
      },
    },
  });
  return transactions;
}
