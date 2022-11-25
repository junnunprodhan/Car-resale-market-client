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
        <div className='mt-10'>
            <h1 className='text-5xl mb-10 text-center text-rose-700'>Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map(category=><Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;