import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddNewStockItem = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const onFormSubmit = async (data) => {
    const newItem = {
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      img: data.img,
      description: data.description,
      suplierName: data.suplierName,
      email: data.email,
    };
    await axios
      .post(
        "https://cryptic-cliffs-97574.herokuapp.com/new-inventory-item",
        newItem
      )
      .then(
        toast.success("You add a new item", {
          toastId: "addItem",
        })
      );
    resetField("name");
    resetField("price");
    resetField("quantity");
    resetField("img");
    resetField("description");
    resetField("quantity");
    resetField("suplierName");
    resetField("email");
  };
  console.log(errors.description);

  return (
    <>
      <div className=" my-5 text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
        <div className="flex-1 md:p-0 lg:pt-8 lg:pb-8 lg:px-8 mxau flex flex-col">
          <section className="bg-gray-400 p-4 shadow">
            <div className="md:flex">
              <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">
                Create A New Item
              </h2>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className="md:flex mb-8">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm">
                    Product Details
                  </legend>
                  <p className="text-xs font-light text-red">
                     All Required field
                  </p>
                </div>
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-xs font-bold">
                      Product Name
                    </label>

                    <input
                      className="w-full shadow-inner p-4 border-0"
                      type="text"
                      name="name"
                      placeholder="Enter your new product name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-500">
                        Required field
                      </span>
                    )}
                  </div>
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                       Product Price
                      </label>
                      <input
                        className="w-full shadow-inner p-4 border-0"
                        type="number"
                        name="price"
                        placeholder="$ 000"
                        {...register("price", { required: true })}
                      />
                      {errors.price && (
                        <span className="text-red-500">
                          Required field
                        </span>
                      )}
                    </div>
                    <div className="md:flex-1 md:pl-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Stock Product Quantity
                      </label>
                      <input
                        className="w-full shadow-inner p-4 border-0"
                        type="number"
                        name="quantity"
                        placeholder="0"
                        {...register("quantity", { required: true })}
                      />
                      {errors.quantity && (
                        <span className="text-red-500">
                            All Required field
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Product Image URL
                      </label>

                      <input
                        className="w-full shadow-inner p-4 border-0"
                        type="url"
                        name="img"
                        placeholder="Enter the product URL"
                        {...register("img", { required: true })}
                      />
                      {errors.img && (
                        <span className="text-red-500">
                           Required field
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm">
                    Product Descriptions
                  </legend>
                  <p className="text-xs font-light text-red">
                           All Required field
                  </p>
                </div>
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <textarea
                    className="w-full shadow-inner p-4 border-0"
                    placeholder="Enter Product Description here............."
                    rows="6"
                    name="description"
                    {...register("description", {
                      minLength: 50,
                      required: true,
                    })}
                  ></textarea>
                  {errors.description && (
                    <span className="text-red-500">
                      Minimum 50 character required
                    </span>
                  )}
                </div>
              </div>
              <div className="md:flex mb-8">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-sm">
                    Dealer Info
                  </legend>
                  <p className="text-xs font-light text-red">
                        All Required field
                  </p>
                </div>
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-xs font-bold">
                      Dealer/Supplier Name
                    </label>
                    <input
                      className="w-full shadow-inner p-4 border-0"
                      type="text"
                      name="suplierName"
                      placeholder="Md. Al Amin Hossain"
                      {...register("suplierName", {
                        required: true,
                      })}
                    />
                    {errors.suplierName && (
                      <span className="text-red-500">
                            All Required field
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Dealer Email Address
                    </label>
                    <input
                      className="w-full shadow-inner p-4 border-0"
                      type="email"
                      name="email"
                      placeholder="kidstoys.dealer@gmail.com"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-500">
                            Required field
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                <div className="md:flex-1 px-3 text-center md:text-right">
                  <button className="button mt-1 bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-500 hover:border-blue-600 px-3 py-2 rounded uppercase font-poppins font-medium">
                    Create A Product Item
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddNewStockItem;
