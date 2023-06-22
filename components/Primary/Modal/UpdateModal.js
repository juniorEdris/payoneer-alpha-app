"use client";

import { useCallback, useEffect, useState } from "react";
import Modal from ".";
import { useRouter } from "next/navigation";
import Input from "../Input";

const UpdateModal = ({
  id,
  isOpen,
  handleClose,
  data,
  setData,
  categories,
  details,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({ title: "", category: "", price: "" });

  const router = useRouter();

  const handleChange = (e) => {
    setForm((state) => ({ ...state, [e.target.id]: e.target.value }));
  };

  const handleAllClose = () => {
    handleClose();
    setForm({
      title: "",
      category: "",
      price: "",
    });
    setErrors({});
  };

  const onSubmit = useCallback(() => {
    setIsLoading(true);
    setErrors({});
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
    if (!form?.price || isNaN(form?.price)) {
      setErrors({ price: "no price provided" });
      setIsLoading(false);
      return;
    }

    // as updating using api is returning error "404 not found" I updated localy to show the change.
    try {
      const updatedData = [...data].map((item) => {
        if (item?.id === id) {
          item.title = form?.title;
          item.category = form?.category;
          item.price = form?.price;
        }
        return item;
      });
      setData((state) => ({
        ...state,
        products: updatedData,
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
  }, [id, form, handleClose, router, data, setData]);

  useEffect(() => {
    setForm((state) => ({ ...state, ...details }));
  }, [details]);

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
      title="Update Product"
      actionLabel="Update"
      onClose={handleAllClose}
      onSubmit={onSubmit}
      body={bodyContent}
      secondaryAction={handleAllClose}
      secondaryActionLabel="Close"
      secondaryDanger
    />
  );
};

export default UpdateModal;
