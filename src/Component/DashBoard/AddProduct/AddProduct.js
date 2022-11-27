import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory]=useState([])
  const navigate=useNavigate()
  console.log(user);
  const { email, photoURL } = user;
  const displayName = user?.displayName;
  const userInfo = {
    displayName,
    email,
    photoURL,
  };
  console.log(userInfo);
  const date = new Date().toLocaleString();

  const [product, SetProduct] = useState({ userInfo, date, Status: "panding",email,UserStatus:'Unverify' });
  console.log(product);

  // Handle Submit

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Product Added");
        event.target.reset()
        navigate('/dashBoard/myProducts')

      });
  };


  const handleBlur = (event) => {
    const FieldName = event.target.name;
    const FieldValue = event.target.value;
    console.log(FieldName, FieldValue);
    const newUser = { ...product };
    newUser[FieldName] = FieldValue;
    SetProduct(newUser);
  };

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
  return (
    <div className="min-h-screen my-4 py-5 bg-base-200">
      <form
        onSubmit={handleSubmit}
        className=" my-8 lg:w-1/2 sm:w-3/4 mx-auto px-4 rounded-lg shadow-2xl bg-base-100"
      >
        <h1 className="sm:text-3xl text-xl sm:p-5 text-center font-bold">
          Add Product
        </h1>
        <div className=" ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              onBlur={handleBlur}
              name="title"
              placeholder="title"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">photo Url</span>
            </label>
            <input
              type="text"
              name="picture"
              onBlur={handleBlur}
              placeholder="photo Url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              onBlur={handleBlur}
              className="select w-full input input-bordered"
            >
              <option disabled selected>
                select Category
              </option>
              {category.map((sC) => (
                <option value={sC.category}>{sC.category}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Condition</span>
            </label>
            <select
              name="condition"
              onBlur={handleBlur}
              className="select w-full input input-bordered"
            >
              <option disabled selected>
               select condition
              </option>
              <option value='Good'>
                Good
              </option>
              <option value='New'>
                New
              </option>
              <option value='fresh'>
                fresh
              </option>
              <option value='used'>
                Used
              </option>
              
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              onBlur={handleBlur}
              name="Description"
              placeholder="Description"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              onBlur={handleBlur}
              placeholder="Location"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">resalePrice</span>
            </label>
            <input
              type="text"
              name="resalePrice"
              onBlur={handleBlur}
              placeholder="resalePrice"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">originalPrice</span>
            </label>
            <input
              type="text"
              name="originalPrice"
              onBlur={handleBlur}
              placeholder="originalPrice"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">useTime</span>
            </label>
            <input
              type="text"
              name="useTime"
              onBlur={handleBlur}
              placeholder="useTime"
              className="input input-bordered"
            />
          </div>
          
          <div className="form-control mt-5 mb-5">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
