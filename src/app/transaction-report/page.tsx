import MonthSelector from "@/components/monthSelector";
import SearchContainer from "@/components/searchTransaction";
import prisma from "@/db";
export default async function TransactionReport() {
  const allTransactions = await prisma.transaction.findMany();

  return (
    <main className="container pt-10">
      <MonthSelector />
      <SearchContainer />
    </main>
  );
}
