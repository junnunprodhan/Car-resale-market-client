import React, { useEffect, useState } from "react";
import axios from "axios";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { toast } from "react-toastify";


const Advertisement = () => {
//   const { data: showProducts = [] } = useQuery({
//     queryKey: ["product"],
//     queryFn: () =>
//       fetch("http://localhost:5000/product").then((res) => res.json()),
//   });

  const [showProducts, setShowProducts]=useState([])
      useEffect(()=>{
          axios
          .get('http://localhost:5000/product')
          .then((res) => setShowProducts(res.data));
      },[])
  // handle Delete
  const handleDelete = (id) => {
    const agree = window.confirm("you want to delete");
    if (agree) {
      fetch(`http://localhost:5000/productDelete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.deletedCount > 0){
            const remaining = showProducts.filter(r => r._id !== id);
            setShowProducts(remaining);
              toast.success('delete successfully')
          }
          toast.success("delete successfully");
        });
    }
  };

  const Status = {
    Status: "Advertised",
  };

  const handleAdvertise = (id) => {
    fetch(`http://localhost:5000/showAdvertise/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Status),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success("Advertisement successful");
        }
      });
  };

  return (
    <>
      <div>
        <h1 className="md:text-5xl mt-10 text-3xl text-center mb-10 bg-gradient-to-r from-pink-500 via-red-500 to-red-900 shadow-xll lg:w-1/2 mx-auto p-4 font-bold text-white rounded-md">
          Show all Advertisement
        </h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>sl</th>
              <th>Seller Name</th>
              <th>Title</th>
              <th>img</th>
              <th>Price</th>
              <th>used</th>
              <th>status</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {showProducts.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product?.userInfo?.displayName}</td>
                <td>{product.title}</td>
                <td>
                  <PhotoProvider>
                    <PhotoView src={product?.picture}>
                      <img src={product?.picture} className="w-8 h-8" alt="" />
                    </PhotoView>
                  </PhotoProvider>
                </td>
                <td>{product.resalePrice}</td>
                <td>{product.useTime} Year</td>
                <td>{product.Status}</td>
                {product?.Status === "Advertised" ? (
                  <>
                    {" "}
                    <span className="text-green-600 text-xl">Approved</span>
                  </>
                ) : (
                  <>
                    <td>
                      <button
                        onClick={() => handleAdvertise(product._id)}
                        className="btn btn-sm bg-blue-500"
                      >
                        Advertise
                      </button>
                    </td>
                  </>
                )}
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-sm bg-red-600"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Advertisement;
