import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyBuyers = () => {
    const {user}=useContext(AuthContext)
    const [myBuyers, setMyBuyers]=useState([])
    const{email}=user

        useEffect(()=>{
            axios
            .get(`http://localhost:5000/myBuyer/${email}`)
            .then((res) => setMyBuyers(res.data));
        },[email])

    // const handleDelete = id=>{
    //     const agree =window.confirm('you want to delete')
    //     if(agree){
    //         fetch(`http://localhost:5000/bookingDelete/${id}`,{
    //             method:'DELETE'
    //         })
    //         .then(res=>res.json())
    //         .then (data=>{
    //             if(data.deletedCount > 0){
    //               const remaining = myBuyers.filter(r => r._id !== id);
    //               setMyBuyers(remaining);
    //                 toast.success('buyer delete successfully')
    //             }
    //         })
    //     }
    //   }
    return (
        <>
        <div>
            <div className='text-center my-10'><p className='md:text-5xl text-3xl text-center mb-10 bg-gradient-to-r from-pink-500 via-red-500 to-red-900 shadow-xll lg:w-1/2 mx-auto p-4 font-bold text-white rounded-md'>Total My Buyers : {myBuyers.length}</p></div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                    <tr>
                        <th>sl</th> 
                        <th>picture</th> 
                        <th>Buyer Name</th> 
                        <th>Phone Number</th> 
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                    </thead>
                    <tbody> 
                        {
                            myBuyers.map((uInfo,i)=><tr key={uInfo._id}>
                            <th>{i+1}</th> 
                            <td><img className='w-10' src={uInfo.photoURL} alt="" /></td> 
                            <td>{uInfo.userName}</td>
                            <td>{uInfo.phoneNumber}</td>
                            <td>{uInfo.userEmail}</td> 
                            <td>{uInfo.meetLocation}</td> 
                            </tr>)
                        }      
                    </tbody> 
                    
                </table>
            </div>
            
        </div>
        </>
    );
};

export default MyBuyers;