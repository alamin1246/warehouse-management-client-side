import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import Slider from "../slider/Slider";
import { signOut } from "firebase/auth";

const Inventory = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [inventoryItem, setEnventoryItem] = useState([]);
  const handleSignOut = () => {
    signOut(auth);
  };
  const [stockNumber, setStockNumber] = useState({
    stock: "",
  });
  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStockNumber({ ...stockNumber, [name]: value });
    e.preventDefault();
  };
  const [newData, setNewData] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const loadData = async () => {
      try {
        const url = `https://cryptic-cliffs-97574.herokuapp.com/manage-inventory?_id=${id}`;
        const { data } = await axios.get(url);
        setEnventoryItem(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, [id, newData]);

  const updateQuantity = async (id, quantity) => {
    const getQuantity = parseInt(quantity) - 1;
    const newQuantity = {
      quantity: getQuantity.toString(),
    };

    // send data to the monogod server and update
    const url = `https://cryptic-cliffs-97574.herokuapp.com/inventory-items/${id}`;
    await axios.put(url, newQuantity).then((response) => {
      const { data } = response;
      if (data) {
        setNewData(!newData);
      }
    });
  };
  const { stock } = stockNumber;
  const updateStock = async (id, quantity) => {
    if (stock === "") {
      return toast.error("Please input stock number", {
        toastId: "inputStock",
      });
    }
    if (parseInt(stock) <= 0) {
      toast.error("Input a positive value", {
        toastId: "registerError",
      });
    } else {
      const getQuantity = parseInt(quantity) + parseInt(stock);

      const newQuantity = {
        quantity: getQuantity.toString(),
      };

      // send data to the monogod server and update
      const url = `https://cryptic-cliffs-97574.herokuapp.com/inventory-items/${id}`;
      await axios.put(url, newQuantity).then((response) => {
        const { data } = response;
        if (data) {
          setNewData(!newData);
        }
      });
      setStockNumber({ stock: "" });
    }
  };

  return (
    <>
      <div className="flex relative  ">
        <div className="fixed  top-0  bg-[rgb(0,7,61)] h-[100vh]  ">
          <div className="absolute  top-0 left-0 h-full lg:static">
            <Slider />
          </div>
        </div>
        <div className="ml-[52px] min-h-screen w-full">
          <div>
            <div className=" w-[100%] flex items-center justify-between px-2 md:px-5 shadow-md bg-white py-2 bg-opacity-50">
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-500 font-semibold ">
                  Kids Toy Stock Management Admin Panel
                </h1>
              </div>
              <div className="w-16 h-16 relative">
                <div>
                  <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-green-500 rounded-full"></span>
                  <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-green-500 rounded-full animate-ping"></span>
                </div>
                <div className="antialiased">
                  <div className="relative cursor-pointer group">
                    {user?.photoURL ? (
                      <img
                        className="w-16 h-16 rounded-full border-2 border-blue-600"
                        src={user.photoURL}
                        alt="profile"
                      />
                    ) : (
                      <img
                        className="w-16 h-16 rounded-full border-2 border-blue-600"
                        src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                        alt="profile"
                      />
                    )}

                    <div className="absolute   hidden right-0 top-0 mt-10 bg-white rounded-md shadow-lg  group-hover:block hover:block">
                      <div>
                        <div className="flex flex-col p-4 space-y-1 font-medium border-b">
                          <span className="text-gray-800">
                            {user.displayName ? user.displayName : "User"}
                          </span>
                          <span className="text-sm text-gray-400">
                            {user.email ? user.email : "dealer@example.com"}
                          </span>
                        </div>
                        <ul className="flex flex-col p-2 my-2 space-y-1">
                          <li>
                            <Link
                              to="/"
                              className="block px-2 py-1 text-teal-600  transition rounded-md hover:bg-gray-100"
                            >
                              Home Page
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/dashboard/manage-inventory"
                              className="block px-2 py-1  text-teal-600 transition rounded-md hover:bg-gray-100"
                            >
                              Manage Inventory
                            </Link>
                          </li>
                        </ul>
                        <div className="flex items-center text-xl justify-center p-4 text-blue-600 underline border-t">
                          <span onClick={handleSignOut}>Logout</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" px-4 sm:px-8">
              <div className="py-8">
                <div className="flex justify-end lg:px-8  items-center py-5">
                  <NavLink
                    to="/dashboard/manage-inventory"
                    className="inline-block px-4 py-2  border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                  >
                    Manage Inventory
                  </NavLink>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold leading-tight">
                    Inventory
                  </h2>
                </div>
                <div className="-mx-4 hidden md:block fle sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full  shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Product Info
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Dealer Info
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Stock Manage
                          </th>
                        </tr>
                      </thead>

                      {inventoryItem.map((item) => (
                        <tbody key={item._id}>
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img
                                    className="w-full h-full "
                                    src={item.img}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-3">
                                  <p className="font-semibold whitespace-no-wrap">
                                    {item.name}
                                  </p>
                                  <p className="text-gray-600 whitespace-no-wrap">
                                    id: {item._id}
                                  </p>

                                  <p className="text-gray-600 whitespace-no-wrap">
                                    Available:{item.quantity} in stock.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                $ {item.price}
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                USD
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {item.suplierName}
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                {parseInt(item.quantity) === 0
                                  ? "Sold out"
                                  : "Sold Abailable"}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <button
                                onClick={() => {
                                  if (parseInt(stock) <= 0) {
                                    toast.error("Item's out of stock", {
                                      toastId: "registerError",
                                    });
                                  } else {
                                    updateQuantity(item._id, item.quantity);
                                  }
                                }}
                                className="block  bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                              >
                                {parseInt(item.quantity) <= 0
                                  ? "Sold Out"
                                  : "Delivered"}
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
                {inventoryItem.length === 0 ? (
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
                {/* mobile screen  */}
                <div className="-mx-4 md:hidden sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full table-auto">
                      <thead>
                        <tr>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Product Info
                          </th>

                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Stock Manage
                          </th>
                        </tr>
                      </thead>
                      {inventoryItem.map((item) => (
                        <tbody key={item._id}>
                          <tr>
                            <td className=" py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex flex-col justify-center items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img
                                    className="w-full h-full"
                                    src={item.img}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-3">
                                  <p className="font-semibold whitespace-no-wrap">
                                    {item.name}
                                  </p>

                                  <p className="text-gray-600 whitespace-no-wrap">
                                    {item.quantity} in stock.
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                              <button
                                onClick={() => {
                                  if (parseInt(item.quantity) <= 0) {
                                    toast.error("No Items In stock", {
                                      toastId: "noItemsStock",
                                    });
                                  } else {
                                    updateQuantity(item._id, item.quantity);
                                  }
                                }}
                                className="block  bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                              >
                                {parseInt(item.quantity) <= 0
                                  ? "Sold Out"
                                  : "Delivered"}
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className=" px-1 md:px-5  lg:px-[5%] xl:px-[20%] mx-auto overflow-x-auto  ">
              {inventoryItem.map((inventory) => (
                <form
                  key={inventory._id}
                  className="inline-block p-4 bg-white w-full shadow-lg rounded-lg overflow-hidden"
                >
                  <div className="mb-4">
                    <div>
                      <h1 className="mt-3 text-2xl text-center font-semibold ">
                        Product Information
                      </h1>
                      <div className="flex flex-col md:flex-row my-5 lg:my-0 justify-between px-[2%] items-center">
                        <div>
                          <img src={inventory.img} alt="product" />
                        </div>

                        <div>
                          <p className="text-xl mb-1 font-thin">
                            {inventory.name}
                          </p>
                          <p className="text-xs lg:text-sm">
                            ID: {inventory._id}
                          </p>
                          <p className="text-gray-500 font-bold ">
                            Available: {inventory.quantity} in stock
                          </p>
                        </div>
                        <div className="hidden md:block">
                          <p className="text-sm 2xl:text-xl mb-1 font-bold">
                            Dealer: {inventory.suplierName}
                          </p>
                          <p className="text-gray-500 font-bold ">
                            Price:$ {inventory.price} in stock
                          </p>
                        </div>
                      </div>
                    </div>
                    <label
                      className="block text-gray-700 font-thin mb-2 uppercase"
                      htmlFor="stock"
                    >
                      Restock the items
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="stock"
                      type="number"
                      placeholder="Enter imported stock number"
                      name="stock"
                      value={stockNumber.stock}
                      onChange={getUserData}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() =>
                        updateStock(inventory._id, inventory.quantity)
                      }
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Update Stock
                    </button>
                  </div>
                </form>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
