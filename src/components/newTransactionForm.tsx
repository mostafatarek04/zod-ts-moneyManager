"use client";
import { useRef, useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import SubmitButton from "./submitFormButton";
import { addTransactionAction } from "@/actions/transactions/transactionAction";
export default function NewTransactionForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  const addTransaction = async (formData: FormData) => {
    console.log("The title ref =" + titleRef.current?.value);
    console.log("The desc ref =" + descRef.current?.value);
    console.log("The amount ref =" + amountRef.current?.value);
    console.log("The type ref =" + typeRef.current?.value);
    await addTransactionAction(formData, "idid");
  };
  return (
    <form action={addTransaction} autoComplete="off">
      <Input
        ref={titleRef}
        type="text"
        name="title"
        placeholder="Transaction Title"
        label="Transaction  Title"
        className="my-4"
      />
      <Textarea
        ref={descRef}
        minRows={3}
        label="Transaction Description"
        placeholder="Enter your description"
        name="desc"
      />
      <div className="flex gap-2 items-center my-4">
        <Select
          label="Transaction Method"
          placeholder="Select Transaction Method"
          className="grow"
          name="method"
        >
          <SelectItem key={"VISA"}>Visa</SelectItem>
          <SelectItem key={"CASH"}>Cash</SelectItem>
        </Select>
        <Select
          label="Transaction Type"
          placeholder="Select Transaction Method"
          className="grow"
          ref={typeRef}
          name="type"
        >
          <SelectItem key={"INCOME"}>Income</SelectItem>
          <SelectItem key={"SPENDING"}>Spending</SelectItem>
        </Select>
        <Input
          ref={amountRef}
          type="number"
          name="amount"
          placeholder="Transaction Amount"
          label="Transaction  Amount"
          className="grow"
        />
      </div>
      <h3 className="my-4 text-xl ">Select Transaction Category:</h3>
      <div className="flex gap-4 my-4">
        <div className="p-4 cursor-pointer rounded-2xl bg-gray-100 text-blue-950">
          HOME
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}
