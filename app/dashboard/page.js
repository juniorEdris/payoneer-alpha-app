"use client";
import useFetch from "@/actions/useFetch";
import Table from "@/components/Dashboard/Table";
import Container from "@/components/Primary/Container";
import DeleteModal from "@/components/Primary/Modal/DeleteModal";
import { useState } from "react";

const Dashboard = () => {
  const { loading, data, setData } = useFetch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleDelete = (id) => {
    if (!id) {
      return;
    }
    setIsOpen(true);
    setSelectedId(id);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setSelectedId(null);
  };

  return (
    <section className="min-h-screen py-20">
      <Container>
        <div className="grid place-content-center">
          <div className="py-6">form</div>
          <div className="py-6">
            {loading && !data?.products?.length ? (
              "Loading"
            ) : data?.products?.length ? (
              <Table data={data?.products} handleDelete={handleDelete} />
            ) : (
              "no data found"
            )}
          </div>
        </div>
      </Container>
      <DeleteModal
        id={selectedId}
        isOpen={isOpen}
        handleClose={handleModalClose}
        data={data?.products}
        setData={setData}
      />
    </section>
  );
};

export default Dashboard;
