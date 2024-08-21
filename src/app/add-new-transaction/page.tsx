import NewTransactionForm from "@/components/newTransactionForm";

export default function AddNewTransaction() {
  return (
    <main className="container py-5">
      <h2 className="text-4xl font-medium text-gray-900">
        Add New Transaction
      </h2>
      <NewTransactionForm />
    </main>
  );
}
