import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <a href="" class="group relative block shadow-xl h-96">
      <span class="absolute inset-0 "></span>

      <div class="relative flex h-full transform items-end bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div class="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0">
          <div className="absolute top-0">
            <img className="w-full h-1/2 p-5" src={product.picture} alt="" />
          </div>

          <div className="mt-8">
          <h2 className="mt-8 text-2xl font-medium">{product.name}</h2>
          </div>
          <div>
            <div className="flex">
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src={product.userInfo.photoURL} alt="" />
                </div>
              </div>
              <div className="mx-2">
                <h4 className="text-xl">
                  {product.userInfo.displayName}
                </h4>
              </div>
            </div>

            <p>User Type:{product.userInfo.role}</p>
            <p>Resale Price:${product.resalePrice}</p>
            <p>Original Price:${product.originalPrice}</p>
          </div>
        </div>

        <div class="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
          <h3 class="mt-4 text-2xl font-medium">{product.name}</h3>

          <div class="mt-4">
          <p>User Type:{product.userInfo.role}</p>
            <p>Resale Price:${product.resalePrice}</p>
            <p>Original Price:${product.originalPrice}</p>
          </div>
          <button className="mt-6 rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow rounded hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
            <Link to="">Read more</Link>
          </button>
        </div>
      </div>
    </a>
  );
};

export default Card;
