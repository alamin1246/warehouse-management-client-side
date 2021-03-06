import React from "react";
import { Link } from "react-router-dom";

const BestOffer = () => {
  return (
    <>
      <div className="container mx-auto mt-5 px-6 md:px-12 xl:px-32">
        <div className="text-center text-gray-800">
          <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12 bg-blue-200">
            <h1 className="text-2xl md:text-4xl xl:text-5xl  font-bold tracking-tight mb-12">
              The best Kids Toys <br />
              <span className="text-gray-600">for Customers Stock Kids Toys</span>
            </h1>
            <Link
              to="/"
              className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              role="button"
            >
              Get started
            </Link>
            <Link
              to="/"
              className="inline-block px-7 py-3  bg-green-800 text-white font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              role="button"
            >
              More About
            </Link>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
};

export default BestOffer;
