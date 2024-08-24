"use client";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import SubmitButton from "./submitFormButton";
import { useForm } from "react-hook-form";
import { addTransactionAction } from "@/actions/transactions/transactionAction";
import {
  TtransactionSchema,
  transactionSchema,
} from "@/schemas/transactionSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
export default function NewTransactionForm() {
  const {
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<TtransactionSchema>({
    resolver: zodResolver(transactionSchema),
  });
  const onSubmit = async (data: TtransactionSchema) => {
    // console.log(data);
    console.log(data);
    try {
      transactionSchema.parse(data);
      addTransactionAction(data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log("oofofof");
      }
    }
  };
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <Input
        label="Transaction Title"
        placeholder="ex: dinner out with friends"
        variant="underlined"
        {...register("title")}
      />

      <Textarea
        label="Transaction Description"
        placeholder="ex: dinner out with friends where we had alot of fun and stuff"
        variant="underlined"
        minRows={3}
        {...register("description")}
      />

      <Input
        label="Transaction Amount"
        type="number"
        placeholder="ex: 10000"
        variant="underlined"
        {...register("amount")}
      />
      <div className="flex gap-x-3">
        <Select
          label="Transaction Method"
          placeholder="Choose a transaction method"
          variant="underlined"
          {...register("method")}
        >
          <SelectItem key={"CASH"}>Cash</SelectItem>
          <SelectItem key={"CREDIT"}>Credit</SelectItem>
        </Select>
        <Select
          label="Transaction Type"
          placeholder="Choose a transaction type"
          variant="underlined"
          {...register("type")}
        >
          <SelectItem key={"INCOME"}>Income</SelectItem>
          <SelectItem key={"SPENDING"}>Spending</SelectItem>
        </Select>
      </div>
      <Input
        label="Transaction Category"
        type="text"
        placeholder="ex: Home Supplies"
        variant="underlined"
        {...register("category")}
      />
      <button
        className="bg-gray-900 text-white text-center w-full py-6 rounded-xl text-2xl"
        type="submit"
      >
        Add Transaction
      </button>
    </form>
  );
}
