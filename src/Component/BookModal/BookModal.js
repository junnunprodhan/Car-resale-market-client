import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const BookModal = ({bookItem}) => {
   
    const { picture, resalePrice, title, userInfo,_id}=bookItem;
    const {email:sellerEmail} = userInfo;
    console.log(sellerEmail)
    
    console.log(sellerEmail)
    const{user}=useContext(AuthContext)
    const photoURL=user?.photoURL;
    const email =user?.email
    const displayName=user.displayName;
    const navigate=useNavigate()

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const phoneNumber = form.phoneNumber.value;
        const meetTime =form.meetTime.value;
        const meetLocation=form.meetLocation.value;
       
      
        const booking = {
            title,
            userName: displayName,
            userEmail: email,
            price: resalePrice,
            phoneNumber,
            meetLocation,
            meetTime,
            picture,
            photoURL,
            sellerEmail
           
        }
      
        fetch('https://car-resale-market-server.vercel.app/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                  
                    toast.success('booking confirmed')
                    navigate('/dashBoard/myOrders')
                    
                }
            })
    }

    const Status ={
      Status:'sold'
    }
const handleStatus=id=>{
  fetch(`https://car-resale-market-server.vercel.app/updateProduct/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(Status)

        })
        .then (res=>res.json())
        .then (result=>{
            if(result.acknowledged){

                toast.success('Advertisement request successful')
            }
        })
}





  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form
            onSubmit={handleBooking}
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
                  name="itemName"
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
                <button onClick={()=>handleStatus(_id)} type="submit" className="btn btn-primary">
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
