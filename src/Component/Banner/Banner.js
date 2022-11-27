import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-white shadow-lg mt-10 mt-10">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src='https://cdn.theatlantic.com/assets/media/img/sponsored/2016/02/automobile_in_the_cloud/resp-feature.png'
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="lg:text-5xl font-bold  text-3xl">
            This is our Car Market
          </h1>
          <div className="flex flex-col space-y-4 mt-5 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <p>This is one of the best Car Buy and Sell Market.This Car Market is one of the best market in the world</p>
            
          </div>
          <Link
              to="/register"
              className="px-8 py-3 text-lg mt-6 w-full lg:w-1/3 font-semibold rounded bg-red-500 hover:bg-red-700 text-white"
            >
              Get Start
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
