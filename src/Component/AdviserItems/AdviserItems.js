import React, { useEffect, useState } from "react";
import BookModal from "../BookModal/BookModal";
import SingleProduct from "../SingleProduct/SingleProduct";

const AdviserItems = () => {
  const [products, setProducts] = useState([]);
  const [bookItem, setBookItem] = useState(null);

  useEffect(() => {
    fetch("https://car-resale-market-server.vercel.app/AdvertisedProduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
    <div className="mt-24">
   <h1 className="md:text-5xl text-3xl text-center mb-10 bg-gradient-to-r from-pink-500 via-red-500 to-red-900 shadow-xll lg:w-1/2 mx-auto p-4 font-bold text-white rounded-md">
        Advertise Items
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((singleCate) => (
          <SingleProduct
            key={singleCate._id}
            singleCate={singleCate}
            setBookItem={setBookItem}
          ></SingleProduct>
        ))}
      </div>
      {bookItem && <BookModal bookItem={bookItem}></BookModal>}
    </div>
    </>
  );
};

export default AdviserItems;
