import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Card from '../../Card/Card';

const MyProducts = () => {
    const {user}=useContext(AuthContext)
    const [showProducts, setShowProducts]=useState([])
    const{email}=user

        useEffect(()=>{
            axios
            .get(`https://car-resale-market-server.vercel.app/myProduct/${email}`)
            .then((res) => setShowProducts(res.data));
        },[email])

     const Status={
        Status:"Advertised"
     }

    const handleAdvertise=id=>{
         
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
        
    const handleDelete = id=>{
        const agree =window.confirm('you want to delete')
        if(agree){
            fetch(`https://car-resale-market-server.vercel.app/productDelete/${id}`,{
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
            <h1 className='md:text-5xl text-3xl text-center mb-10 bg-gradient-to-r from-pink-500 via-red-500 to-red-900 shadow-xll lg:w-1/2 mx-auto p-4 font-bold text-white rounded-md'>My Products :{showProducts.length}</h1>
            <div className='grid grid-cols-1 gap-6 m-5 lg:grid-cols-2'>
                {showProducts.map(product=><Card handleDelete={handleDelete} handleAdvertise={handleAdvertise} product={product} key={product._id}></Card>)}
            </div>
        </div>
    );
};

export default MyProducts;