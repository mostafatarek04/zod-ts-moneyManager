import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
type TransactionCardProps = {
  title: string;
  description: string;
  date: string;
  amount: number;
  category: string;
  method: string;
  type: string;
};
export default function TransactionCard({
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
