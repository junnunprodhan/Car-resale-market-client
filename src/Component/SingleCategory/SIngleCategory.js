import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookModal from "../BookModal/BookModal";
import SingleProduct from "../SingleProduct/SingleProduct";

const SIngleCategory = () => {
  const category = useLoaderData();
  const [bookItem,setBookItem]=useState(null)

  return (
    <div className="mt-24">
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.map((singleCate) => (
          <SingleProduct
            key={singleCate._id}
            singleCate={singleCate}
            setBookItem={setBookItem}
          ></SingleProduct>
        ))}
      </div>
      {bookItem &&
        <BookModal bookItem={bookItem}></BookModal>
      }
    </div>
  );
};

export default SIngleCategory;
