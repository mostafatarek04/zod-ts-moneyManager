import TransactionCard from "@/components/transactionCard";
import prisma from "@/db";
import { Progress } from "@nextui-org/react";
import { getTotalspent } from "@/lib/transactions";
import RecentTransactions from "@/components/recentTransactions";
export default async function AllTransaction() {
  const transactions = await prisma.transaction.findMany();
  const totalSpent = getTotalspent(transactions);
  return (
    <main className="container px-10 pt-10">
      <div className="flex">
        <div className="flex-grow flex-col flex gap-y-8 p-8 bg-primaryDark rounded-xl text-white">
          <div className="">
            <h2 className="text-3xl font-semibold">Total Balance </h2>
            <span className="text-xl text-gray-400  font-medium">$10900</span>
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-500">Income</h2>
              <span className="text-lg text-gray-400  font-medium">$14000</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-500">Spendings</h2>
              <span className="text-lg text-gray-400  font-medium">$4000</span>
            </div>
          </div>
        </div>
        <div className="flex-grow p-8">
          <Progress
            label={
              <h3 className="text-primaryDark font-semibold text-lg">
                Monthly Budget
                <span className="block text-sm text-gray-500 font-normal">
                  Keep it up you can save up to 400 this month
                </span>
              </h3>
            }
            size="md"
            value={totalSpent}
            maxValue={100000}
            color="primary"
            classNames={{
              // base: "max-w-md",
              track: "drop-shadow-md border border-default",
              indicator: "bg-primaryDark",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            formatOptions={{ style: "currency", currency: "EGP" }}
            showValueLabel={true}
            className="max-w-full"
          />
        </div>
      </div>
      <RecentTransactions transactions={transactions} />
    </main>
  );
}
