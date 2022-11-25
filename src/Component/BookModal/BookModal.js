import React from "react";

const BookModal = ({bookItem}) => {
   
    const {Condition, Description, category, picture, resalePrice, date, location, originalPrice, title, userInfo}=bookItem
    const{displayName, photoURL, email}=userInfo
    const handleSubmit=event=>{

    }
    console.log(Condition, Description, category, picture, resalePrice, date, location, originalPrice, title, userInfo);
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form
            onSubmit={handleSubmit}
            className="card my-8  p-5 w-full shadow-2xl bg-base-100"
          >
            <div className="sm:card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="title"
                  readOnly
                  placeholder={displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="text"
                  name="picture"
                  readOnly
                  placeholder={email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  name="Description"
                  placeholder={title}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder={resalePrice}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Meet Location</span>
                </label>
                <input
                  type="text"
                  name="meetLocation"
                  placeholder="Meet Location"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Meet Time</span>
                </label>
                <input
                  type="text"
                  name="meetTime"
                  placeholder="Meet Time"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Booked
                </button>
              </div>
            </div>
          </form>

          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookModal;
