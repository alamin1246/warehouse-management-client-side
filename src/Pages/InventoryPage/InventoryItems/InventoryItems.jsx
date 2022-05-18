import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Inventory.css";

const InventoryItems = () => {
  const [inventoryItemes, setInventoryItems] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios.get(
          `https://cryptic-cliffs-97574.herokuapp.com/inventory-items`
        );
        setInventoryItems(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);
  return (
    <>
      <div className="pb-20">
        <h1 className="text-center text-gray-600 text-2xl md:text-5xl font-semibold py-10 md:pt-20 ">
          Kids Toys Inventory Item's
        </h1>
        {inventoryItemes.length === 0 ? (
          <div className=" w-full my-10 z-50 overflow-hidden  opacity-75 flex flex-col items-center justify-center">
            <div
              className="spinner-border animate-spin inline-block text-teal-600 mb-10 w-14 h-14 border-6 rounded-full"
              role="status"
            ></div>
            <h2 className="text-center text-blue-500 text-xl font-semibold">
              Loading...
            </h2>
          </div>
        ) : (
          ""
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 xl:gap-10 justify-center   px-[2%] md:px-[3%] lg:px-[4%] xl:px-[10%]">
          {inventoryItemes.map((item) => (
            <div key={item._id} className="w-full p-2 ">
              <div className="bg-white shadow-lg hover:shadow-xl rounded-lg relative">
                <div
                  className="bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                ></div>
                <div className="flex justify-between items-start px-2 pt-2">
                  <div className="p-2 flex-grow">
                    <h1 className="font-medium text-xl font-poppins">
                      {item.name}
                    </h1>
                    <p className="text-gray-500 font-nunito">
                      {item.description.slice(0, 50) + "..."}
                    </p>
                  </div>

                  <div className="p-2 text-right">
                    <div className="text-teal-500 font-semibold text-center text-lg font-poppins">
                      ${item.price}
                    </div>

                    <div>
                      <div className=" flex justify-center items-center font-semibold text-gray-500 text-center text-sm font-poppins">
                        Price
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex px-4 justify-between items-center">
                  <h1 className="text-gray-400 text-sm">{item.suplierName}</h1>
                  <h1>
                    <span className="font-bold">Availability: </span>{" "}
                    <span className="text-gray-500">
                      <span>{item.quantity}</span> in stock
                    </span>
                  </h1>
                </div>
                <div className="flex justify-center items-center px-2 pb-2">
                  <div className="w-1/2 p-2">
                    <Link
                      to={`dashboard/inventory/${item._id}`}
                      className="block text-center cursor-pointerZ bg-white hover:bg-gray-100 text-blue-500 border-2 border-blue-500 px-3 py-2 rounded uppercase font-poppins font-medium"
                    >
                      Update
                    </Link>
                  </div>
                </div>
                <div className="ribbon ribbon-top-right">
                  <span>
                    {parseInt(item.quantity) === 0 ? "Stock Out" : "In Stock"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 md:mt-8  flex justify-center">
          <div className="rounded-md shadow">
            <Link
              to="/dashboard/manage-inventory"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
            >
              Manage Inventory
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryItems;
