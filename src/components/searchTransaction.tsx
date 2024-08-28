"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { type TtransactionSchema } from "@/schemas/transactionSchema";
import { getTransactionBySearchAction } from "@/actions/transactions/transactionAction";
import TransactionCard from "./transactionCard";
import { title } from "process";
export default function SearchContainer() {
  const [searchTransactions, setSearchTransactions] = useState<
    TtransactionSchema[]
  >([]);
  const searchHandler = async (formData: FormData) => {
    const searchKey = formData.get("search") as string;
    const transactions = await getTransactionBySearchAction(searchKey);
    console.log(transactions);

    setSearchTransactions(transactions);
  };
  return (
    <div className="mt-8 space-y-8">
      <form autoComplete="off" action={searchHandler}>
        <Input
          type="text"
          name="search"
          placeholder="Search for a specific transaction"
          labelPlacement="outside"
          endContent={
            <Button type="submit" className="-me-5">
              Search
            </Button>
          }
        />
      </form>
      <h2>Search Resuls (8):</h2>

      {searchTransactions.map((item) => {
        return (
          <TransactionCard
            key={item.id}
            title={item.title}
            description={item.description}
            date={"Friday 28-06-2024"}
            amount={item.amount}
            category={item.category}
            method={item.method}
            type={item.type}
            id={item.id!}
            isShowButtons={false}
          />
        );
      })}
    </div>
  );
}
