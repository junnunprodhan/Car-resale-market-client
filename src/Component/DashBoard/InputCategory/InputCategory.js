import React from 'react';
import { toast } from 'react-toastify';

const InputCategory = () => {

  const handleSubmit =e=>{
    e.preventDefault()
    const category =e.target.category.value;

    const dbCategory ={
      category,
    }

    fetch('http://localhost:5000/category',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(dbCategory)
            })
            .then(res=>res.json())
            .then(result=>{
            console.log(result)
            e.target.reset();
            toast.success('Add Category')
            })

  }


    return (
        <div>
            <div className="w-2/4 mx-auto mt-10 shadow-md rounded-md p-10">
      <form
      onSubmit={handleSubmit}
      >
       
        <br />
        <input
          type="text"
          placeholder="Category"
          name="category"
          
          className="input input-bordered input-primary w-full"
          required
        />
        <br />
        <button
          className="flex items-center justify-center w-full p-3 mt-4 font-semibold tracking-wide rounded-md bg-gray-900 text-white"
          type="submit"
        >
          Add Category
        </button>
      </form>
    </div>
        </div>
    );
};

export default InputCategory;