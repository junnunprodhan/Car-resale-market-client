import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const {user}=useContext(AuthContext)
    const [showProducts, setShowProducts]=useState([])
    const{email}=user
    console.log(email,showProducts);

        useEffect(()=>{
            axios
            .get(`http://localhost:5000/booking/${email}`)
            .then((res) => setShowProducts(res.data));
        },[email])

    const handleDelete = id=>{
        const agree =window.confirm('you want to delete')
        if(agree){
            fetch(`http://localhost:5000/bookingDelete/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then (data=>{
                if(data.deletedCount > 0){
                  const remaining = showProducts.filter(r => r._id !== id);
                  setShowProducts(remaining);
                    toast.success('Order delete successfully')
                }
            })
        }
      }
    return (
        <>
        <div>
            <div className='text-center my-10'><p className='text-3xl font-bold text-red-700'>MY Total Orders: {setShowProducts[0]?.role} {showProducts.length}</p></div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                    <tr>
                        <th>sl</th> 
                        <th>Product Name</th> 
                        <th>picture</th> 
                        <th>Price</th>
                        <th>Pay</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody> 
                        {
                            showProducts.map((uInfo,i)=><tr key={uInfo._id}>
                            <th>{i+1}</th> 
                            <td>{uInfo.title}</td>
                            <td><img className='w-10' src={uInfo.picture} alt="" /></td> 
                            <td>${uInfo.price}</td> 
                            <td><button className='btn btn-sm bg-sky-400'> pay</button></td>
                            <td><button onClick={()=>handleDelete(uInfo._id)} className='btn btn-sm bg-red-600'> DELETE</button></td>
                            </tr>)
                        }      
                    </tbody> 
                    
                </table>
            </div>
            
        </div>
        </>
    );
};

export default MyOrders;