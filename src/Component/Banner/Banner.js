import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section
  class="relative bg-[url(https://www.topgear.com/sites/default/files/2022/07/9_1.jpg)] bg-cover bg-center mt-10 h-{250px} bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Let us find

        <strong class="block font-extrabold text-rose-700">
          Your Car.
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        The Car resale market is one of the best market in the world.This market sell your used car and buy another used car.
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          href="#"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow rounded hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </Link>

        <Link
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>

    );
};

export default Banner;