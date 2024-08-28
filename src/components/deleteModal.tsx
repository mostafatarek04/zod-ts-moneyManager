"use client";
import { useState } from "react";
import { deleteTransactionAction } from "@/actions/transactions/transactionAction";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import TransactionCard from "./transactionCard";

type DeleteModalProps = {
  title: string;
  description: string;
  date: string;
  amount: number;
  category: string;
  method: string;
  type: string;
  id: string;
  isShowButtons: boolean;
  deleteHandler: unknown;
  index: number;
  transactions: unknown;
};

export default function DeleteModal({
  title,
  date,
  deleteHandler,
  transactions,
  description,
  amount,
  category,
  method,
  type,
  id,
  index,
  isShowButtons = false,
}: DeleteModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [size, setSize] = React.useState("md");

  const sizes = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "full",
  ];

  const handleOpen = (size: string) => {
    // setSize(size);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          className="bg-danger-600 text-white rounded-xl p-3"
          onPress={() => handleOpen("md")}
        >
          Delete
        </Button>
      </div>
      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure you want to delete the following transaction ?
              </ModalHeader>
              <ModalBody>
                <TransactionCard
                  isShowButtons={false}
                  title={title}
                  description={description}
                  date={"Friday 28-06-2024"}
                  amount={amount}
                  category={category}
                  method={method}
                  type={type}
                  id={id}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  onPress={async () => {
                    const updatedArr = transactions.splice(index, 1);
                    deleteHandler(updatedArr);
                    await deleteTransactionAction(id);
                    onClose();
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
