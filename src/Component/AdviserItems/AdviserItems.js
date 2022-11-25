import React, { useEffect, useState } from 'react';
import BookModal from '../BookModal/BookModal';
import SingleProduct from '../SingleProduct/SingleProduct';

const AdviserItems = () => {
    const [products,setProducts]=useState([])
    const [bookItem,setBookItem]=useState(null)

    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])




    return (
        <div className='mt-10'>
            <h1 className='text-5xl text-center mb-5 text-red-700'>Advertise Items</h1>
            <div  className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {products.map((singleCate) => (
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

export default AdviserItems;