import React from "react";
import { Helmet } from "react-helmet-async";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useMenu from "../../../../hooks/useMenu";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";

const ManageItems = () => {
  const [menu, loader, refetch] = useMenu();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>My Cart | Bristo Boss</title>
      </Helmet>
      <SectionHeader title="PAYMENT HISTORY" subTitle="At a glance!" />
      <div className="bg-white p-5">
        <div className="flex text-slate-950  mb-3 font-semibold font-cinzel justify-between items-center ">
          <p className="text-2xl">Total Order: {menu.length}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th className="text-center">Action</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img className="w-20" src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    {" "}
                    <FaEdit
                      title="Edit"
                      size={24}
                      className="text-yell cursor-pointer mx-auto"
                    />
                  </td>
                  <td>
                    <FaTrashAlt
                      title="Delete"
                      onClick={() => handleDelete(item._id)}
                      size={24}
                      className="text-rose-600  cursor-pointer mx-auto"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
