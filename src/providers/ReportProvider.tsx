"use client";
import { createContext, useContext, useState } from "react";
import { type TtransactionSchema } from "@/schemas/transactionSchema";

const ReportContext = createContext<ReportContext | null>(null);
type ReportContext = {
  month: number;
  year: number;
  transactions: TtransactionSchema[];
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  setTransactions: React.Dispatch<React.SetStateAction<TtransactionSchema[]>>;
};
export default function ReportProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [month, setMonth] = useState<number>(1);
  const [year, setYear] = useState<number>(2024);
  //   const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState<TtransactionSchema[]>([]);
  //   const [month, setMonth] = useState(1);
  //   const [month, setMonth] = useState(1);
  return (
    <ReportContext.Provider
      value={{
        month,
        year,
        transactions,
        setMonth,
        setYear,
        setTransactions,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
}

export function useReport() {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error("Can not use useContext outside provider eLement");
  }
  return context;
}
