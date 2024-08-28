"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import DeleteModal from "./deleteModal";
type TransactionCardProps = {
  title: string;
  description: string;
  date: string;
  amount: number;
  category: string;
  method: string;
  type: string;
  id: string;
  isShowButtons: boolean;
  deleteHandler?: unknown;
  transactions?: unknown;
  index?: number;
};
export default function TransactionCard({
  id,
  deleteHandler,
  index,
  transactions,
  isShowButtons,
  title,
  type,
  method,
  date,
  description,
  amount,
  category,
}: TransactionCardProps) {
  return (
    <Card>
      <CardHeader className="justify-between">
        <div>
          <h3 className="text-small font-semibold text-gray-600">{title}</h3>
        </div>
        {isShowButtons && (
          <div className="flex gap-x-2">
            <Button className="bg-sky-900 text-white rounded-xl p-3">
              Edit
            </Button>

            <DeleteModal
              transactions={transactions}
              index={index}
              deleteHandler={deleteHandler}
              id={id}
              title={title}
              description={description}
              date={""}
              amount={amount}
              category={category}
              method={method}
              type={type}
              isShowButtons={false}
            />
          </div>
        )}
      </CardHeader>
      <CardBody className="space-y-4">
        <p>{description}</p>
        <span className="text-gray-500">Date:{date}</span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-gray-500 text-small">Type:</p>
          <p
            className={` ${
              type === "SPENDING" ? "text-red-900" : "text-green-900"
            } text-small`}
          >
            {type}
          </p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-gray-500 text-small">Total:</p>
          <p className="text-gray-500 text-small">${amount}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-gray-500 text-small">Method:</p>
          <p className="text-gray-500 text-small">{method}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-gray-500 text-small">Category:</p>
          <p className="text-gray-500 text-small">{category}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
