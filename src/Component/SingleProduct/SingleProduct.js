import React from "react";

const SingleProduct = ({ singleCate ,setBookItem }) => {
    const{condition, Description, category, picture, resalePrice, date, location, originalPrice, title, userInfo}=singleCate
    const{displayName, photoURL}=userInfo
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" className=" w-full h-[260px]" />
      </figure>
      <div className="card-body text-center">
        <div className="card-actions justify-between">
          <div className="">Original Price:${originalPrice}</div>
          <div className="">Resale Price:${resalePrice}</div>
        </div>
        <h2 className="card-title ">{title}</h2>
        <p className="text-start">{Description}</p>
        <div className="card-actions flex-col justify-between">
          <div className="">Category: {category}</div>
          <div className="">Condition: {condition}</div>
        </div>
        <div className="card-actions flex-col justify-between">
          <div className="">Location: {location}</div>
          <div className="">{date}</div>
        </div>
        <div className="card-actions justify-start">
          <img src={photoURL} className="w-9 h-9" alt="" />
          <div className="">{displayName}</div>
        </div>
        <div className="card-actions justify-center">
          <label htmlFor="booking-modal" onClick={()=>setBookItem(singleCate)} className="btn bg-rose-600 hover:bg-rose-900">Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
