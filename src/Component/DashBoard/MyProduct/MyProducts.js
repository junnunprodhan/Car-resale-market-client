import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Card from '../../Card/Card';

const MyProducts = () => {
    const {user}=useContext(AuthContext)
    const [showProducts, setShowProducts]=useState([])
    const{email}=user
    console.log(email,showProducts);

        useEffect(()=>{
            axios
            .get(`http://localhost:5000/myProduct/${email}`)
            .then((res) => setShowProducts(res.data));
        },[email])

    const handleDelete = id=>{
        const agree =window.confirm('you want to delete')
        if(agree){
            fetch(`http://localhost:5000/productDelete/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then (data=>{
                if(data.deletedCount > 0){
                  const remaining = showProducts.filter(r => r._id !== id);
                  setShowProducts(remaining);
                    toast.success('delete successfully')
                }
            })
        }
      }
    
    return (
        <div className='mt-10'>
            <h1 className='text-center text-5xl font-semibold text-rose-700 mb-10'>My Products</h1>
            <div className='grid grid-cols-1 gap-6 m-5 lg:grid-cols-2'>
                {showProducts.map(product=><Card handleDelete={handleDelete} product={product} key={product._id}></Card>)}
            </div>
        </div>
    );
};

export default MyProducts;