"use client";

import { useCallback, useState } from "react";
import Modal from ".";
import { useRouter } from "next/navigation";
import Heading from "../Heading";

const DeleteModal = ({ id, isOpen, handleClose, data, setData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    try {
      //   As after adding product, its not geting removed in server, so I removed from state
      setData((state) => ({
        ...state,
        products: [...data]?.filter((item) => item?.id !== id),
      }));
      setTimeout(() => {
        handleClose();
      }, 300);
      setIsLoading(false);
      router.refresh();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [id, handleClose, router, data, setData]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <h1 className="text-red-700">
        <Heading center title="Delete Product?" subtitle="" />
      </h1>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Delete"
      actionLabel="Delete"
      onClose={handleClose}
      onSubmit={onSubmit}
      body={bodyContent}
      danger
      secondaryAction={handleClose}
      secondaryActionLabel="Cancel"
    />
  );
};

export default DeleteModal;
