"use client";
import TransactionCard from "@/components/transactionCard";
import { type TtransactionSchema } from "@/schemas/transactionSchema";
import { Button } from "@nextui-org/button";
import { useState, useEffect } from "react";
import { useOptimistic } from "react";

export default function RecentTransactions({
  transactions,
}: {
  transactions: TtransactionSchema[];
}) {
  const [activeButton, setActiveButton] = useState<string>("all");
  const [filteredTransactions, setFilteredTransactions] =
    useState<TtransactionSchema[]>(transactions);
  const [optimisticTransactions, setOptimisticTransactions] =
    useOptimistic(transactions);

  useEffect(() => {
    switch (activeButton) {
      case "all":
        setFilteredTransactions(transactions);
        break;
      case "spending":
        setFilteredTransactions(
          transactions.filter(({ type }) => {
            return type === "SPENDING" ? true : false;
          })
        );
        break;
      case "income":
        setFilteredTransactions(
          transactions.filter(({ type }) => {
            return type === "INCOME" ? true : false;
          })
        );
        break;
      default:
        break;
    }
  }, [activeButton]);
  return (
    <div className="pt-10 space-y-8">
      <div className="flex justify-between">
        <h3 className="text-3xl font-semibold">Recent Transactions:</h3>
        <div className="flex space-x-4">
          <Button
            onClick={() => {
              setActiveButton("all");
            }}
            className={`${
              activeButton === "all" && "bg-primaryDark text-gray-100"
            }`}
          >
            All
          </Button>
          <Button
            onClick={() => {
              setActiveButton("spending");
            }}
            className={`${
              activeButton === "spending" && "bg-primaryDark text-gray-100"
            }`}
          >
            Spending
          </Button>
          <Button
            onClick={() => {
              setActiveButton("income");
            }}
            className={`${
              activeButton === "income" && "bg-primaryDark text-gray-100"
            }`}
          >
            Income
          </Button>
        </div>
      </div>
      {optimisticTransactions.map((transaction, index) => {
        return (
          <TransactionCard
            index={index}
            deleteHandler={setOptimisticTransactions}
            transactions={transactions}
            isShowButtons={true}
            key={transaction.id}
            id={transaction.id ?? ""}
            title={transaction.title}
            description={transaction.description}
            date={"Friday 28-06-2024"}
            amount={transaction.amount}
            category={transaction.category}
            method={transaction.method}
            type={transaction.type}
          />
        );
      })}
    </div>
  );
}
