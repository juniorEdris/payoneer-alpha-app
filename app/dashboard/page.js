"use client";
import useCatFetch from "@/actions/useCatFetch";
import useFetch from "@/actions/useFetch";
import Table from "@/components/Dashboard/Table";
import Button from "@/components/Primary/Button";
import Container from "@/components/Primary/Container";
import AddModal from "@/components/Primary/Modal/AddModal";
import DeleteModal from "@/components/Primary/Modal/DeleteModal";
import UpdateModal from "@/components/Primary/Modal/UpdateModal";
import SpinLoader from "@/components/Primary/SpinLoder";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const Dashboard = () => {
  const { loading, data, setData } = useFetch();
  const { category: categories } = useCatFetch();

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [details, setDetails] = useState(null);

  const handleDelete = (id) => {
    if (!id || loading) {
      return;
    }
    setIsOpenDeleteModal(true);
    setIsOpenAddModal(false);
    setSelectedId(id);
  };

  const handleModalClose = () => {
    setIsOpenAddModal(false);
    setIsOpenDeleteModal(false);
    setIsOpenUpdateModal(false);
    setSelectedId(null);
    setDetails(null);
  };

  const handleAddProdModal = () => {
    if (!categories || loading) {
      return;
    }
    setIsOpenDeleteModal(false);
    setIsOpenAddModal(true);
    setIsOpenUpdateModal(false);
  };

  const handleUpdateModal = (item) => {
    if (!item?.id || !categories || loading) {
      return;
    }
    setDetails(item);
    setSelectedId(item?.id);
    setIsOpenDeleteModal(false);
    setIsOpenAddModal(false);
    setIsOpenUpdateModal(true);
  };

  return (
    <section className="min-h-screen py-20">
      <Container>
        <div className="py-6 flex items-center justify-end">
          <div className="w-56">
            <Button
              label={"Add Product"}
              onClick={handleAddProdModal}
              icon={IoMdAddCircleOutline}
            />
          </div>
        </div>
        <div className="grid place-content-center">
          <div className="py-6">
            {loading && !data?.products?.length ? (
              <SpinLoader sectionClass="min-h-[350px] flex items-center justify-center" />
            ) : data?.products?.length ? (
              <Table
                data={data?.products}
                handleDelete={handleDelete}
                handleUpdateModal={handleUpdateModal}
              />
            ) : (
              "no data found"
            )}
          </div>
        </div>
      </Container>
      <DeleteModal
        id={selectedId}
        isOpen={isOpenDeleteModal}
        handleClose={handleModalClose}
        data={data?.products}
        setData={setData}
      />
      <AddModal
        data={data?.products}
        setData={setData}
        categories={categories}
        isOpen={isOpenAddModal}
        handleClose={handleModalClose}
      />
      <UpdateModal
        id={selectedId}
        details={details}
        data={data?.products}
        setData={setData}
        categories={categories}
        isOpen={isOpenUpdateModal}
        handleClose={handleModalClose}
      />
    </section>
  );
};

export default Dashboard;
