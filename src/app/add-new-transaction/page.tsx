import NewTransactionForm from "@/components/newTransactionForm";

export default function AddNewTransaction() {
  return (
    <main className="container py-5">
      <h2 className="text-4xl font-medium mb-4 text-gray-900">
        Add New Transaction
      </h2>
      <p className="mb-4 text-xl">
        This form is validated with Zod and powered by React Form Hook
      </p>
      <NewTransactionForm />
    </main>
  );
}
