import { z } from "zod";
import { type TtransactionSchema } from "@/schemas/transactionSchema";

export function getTotalspent(transactions: TtransactionSchema[]): number {
  let totalSpent: number;
  totalSpent = transactions.reduce((accumlator, { type, amount }) => {
    if (type === "SPENDING") {
      return accumlator + amount;
    } else {
      return accumlator + 0;
    }
  }, 0);

  return totalSpent;
}

export function groupTransactionByMonth(transactions: TtransactionSchema[]) {}
