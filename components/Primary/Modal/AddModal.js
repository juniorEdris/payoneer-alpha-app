"use client";

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Modal from ".";
import axios from "axios";
import { useRouter } from "next/navigation";
import Input from "../Input";

const AddModal = ({ isOpen, handleClose, data, setData, categories }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({ title: "", category: "", price: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setForm((state) => ({ ...state, [e.target.id]: e.target.value }));
  };

  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    if (!form?.title) {
      setErrors({ title: "no title provided" });
      setIsLoading(false);
      return;
    }
    if (!form?.category) {
      setErrors({ category: "no category provided" });
      setIsLoading(false);
      return;
    }
    if (!form?.price) {
      setErrors({ price: "no price provided" });
      setIsLoading(false);
      return;
    }
    try {
      const res = await axios.post(`https://dummyjson.com/products/add`, form);
      if (res?.status === 200) {
        toast.success(`Operation successfull!`);
        setData((state) => ({
          ...state,
          products: [...data, { ...res?.data }],
        }));
        setTimeout(() => {
          handleClose();
          setForm({ title: "", category: "", price: "" });
        }, 300);
        setIsLoading(false);
        router.refresh();
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(`Operation unsuccessful!`);
    }
  }, [form, handleClose, router, data, setData]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="title"
        label="Product name"
        disabled={isLoading}
        onChange={handleChange}
        errors={errors}
        value={form?.title}
      />
      <select
        id="category"
        className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          
          ${errors["category"] ? "border-rose-700" : "border-neutral-300"}
          ${errors["category"] ? "focus:border-rose-700" : "focus:border-black"}
        `}
        onChange={(e) => handleChange(e)}
        value={form?.category}
      >
        <option value="">Select One</option>
        {categories?.map((item, id) => (
          <option key={id} value={item}>
            {item}
          </option>
        ))}
      </select>
      <Input
        id="price"
        label="Price"
        disabled={isLoading}
        onChange={handleChange}
        errors={errors}
        formatPrice
        value={form?.price}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Add Product"
      actionLabel="Add"
      onClose={handleClose}
      onSubmit={onSubmit}
      body={bodyContent}
      secondaryAction={handleClose}
      secondaryActionLabel="Close"
      secondaryDanger
    />
  );
};

export default AddModal;
