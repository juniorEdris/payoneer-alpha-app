"use client";

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Modal from ".";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteModal = ({ id, isOpen, handleClose, data, setData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.delete(`https://dummyjson.com/products/${id}`);
      if (res?.status === 200) {
        toast.success(`Operation successfull!`);
        setData((state) => ({
          ...state,
          products: [...data]?.filter((item) => item?.id !== id),
        }));
        setTimeout(() => {
          handleClose();
        }, 300);
        setIsLoading(false);
        router.refresh();
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(`Operation unsuccessful!`);
    }
  }, [id, handleClose, router, data, setData]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-red-700">Delete item?</h1>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Delete"
      actionLabel="Continue"
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
