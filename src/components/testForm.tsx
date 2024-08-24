"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea } from "@nextui-org/input";
import { z } from "zod";

import { type TtestSchema, testSchema } from "@/schemas/testSchema";
import {
  transactionSchema,
  type TtransactionSchema,
} from "@/schemas/transactionSchema";
import { Button } from "@nextui-org/button";
import { addTestAction } from "@/actions/test/testActions";
import { addTransactionAction } from "@/actions/transactions/transactionAction";

export default function TestForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TtransactionSchema>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      title: "ugugu",
      description: "opijtro",
      amount: 300,
      type: "INCOME",
      method: "VISA",
      category: "Home",
    },
  });

  console.log(errors);

  const onSubmit = async (data: TtransactionSchema) => {
    console.log("This is the front end submitting data");
    console.log(data);
    try {
      await addTransactionAction(data);
    } catch (error) {
      console.log("This isisis");
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          {...register("title")}
          placeholder="Transaction title...."
          label="Title"
        />
        <Textarea
          {...register("description")}
          placeholder="Enter transaction description...."
          label="Description"
          minRows={3}
        />
        <Input
          {...register("amount")}
          label="Amount"
          placeholder="transaction amount"
        />
        {errors.amount && <p>{errors.amount.message}</p>}
        <Input
          {...register("type")}
          label="Type"
          placeholder="transaction type"
        />
        <Input
          {...register("method")}
          label="Method"
          placeholder="transaction method"
        />
        <Input
          {...register("category")}
          label="Category"
          placeholder="transaction category"
        />
        <Button type="submit"> Submit Form</Button>
      </form>
    </>
  );
}
