"use server";
import prisma from "@/db";
import { Method, Type } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function addTransactionAction(
  formData: FormData,
  category: string
) {
  const userId = "clzoheuoy0000zf56yv81w3bj";

  console.log(formData.get("amount"));

  const newTransaction = await prisma.transaction.create({
    data: {
      title: formData.get("title") as string,
      describtion: formData.get("title") as string,
      amount: +(formData.get("amount") as string),
      type: formData.get("type") as Type,
      method: formData.get("method") as Method,
      category: "Home",
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
  revalidatePath("/all-transactions");
  console.log(newTransaction);
}
