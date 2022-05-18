import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div
        className="relative -z-0 h-[50vh] w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://gaorfid.com/wp-content/uploads/2020/05/toyhobbystoresolution.jpg)",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <main className="px-4 sm:px-6 lg:px-8 z-20 ">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl tracking-tight leading-10 font-medium sm:text-5xl uppercase text-white sm:leading-none ">
              <span className="text-blue-400 font-bold">Kids Toys Stock</span> Management
            </h2>
            <p className="mt-3 text-white  sm:max-w-xl sm:mx-auto md:mt-5">
            Welcome to our best Kids Toys Stock Management. Manage stock
            Kids Toy online.
            </p>
            <div className="mt-3 md:mt-8 sm:flex justify-center">
              <div className="rounded-md shadow">
                <Link
                  to="/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-green-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Banner;
