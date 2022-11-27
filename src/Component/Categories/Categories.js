import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
   
    return (
        <div className='mt-24'>
            <h1 className='md:text-5xl text-3xl text-center mb-10 bg-gradient-to-r from-pink-500 via-red-500 to-red-900 shadow-xll lg:w-1/2 mx-auto p-4 font-bold text-white rounded-md'>Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map(category=><Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;