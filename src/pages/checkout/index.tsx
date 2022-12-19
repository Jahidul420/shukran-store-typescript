import { useState } from "react";
import {
  AiFillHome,
  AiFillPlusCircle,
  AiOutlineMinus,
  AiOutlinePlus
} from "react-icons/ai";
import { FaCreditCard, FaHeart, FaMoneyBillWave } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { ImOffice } from "react-icons/im";
import { TbCurrencyTaka } from "react-icons/tb";
import { TfiAngleLeft } from "react-icons/tfi";
import { Link } from "react-router-dom";
import productsArr from "../../data/ProductsData";
import { Products } from "../../typs/plan";
const index = () => {
  const [products, setProducts] = useState(productsArr);

  return (
    <>
      <div className="bg-[#fafafa]">
        <div className="flex items-center h-screen gap-3 max-w-7xl mx-auto py-5 ">
          <div className=" w-4/6 h-full">
            <h2 className="font-bold text-4xl mb-5">Cart Items</h2>
            <div className="w-full flex justify-between items-center font-semibold text-sm pb-3 text-center border-b-2">
              <p className="w-[40%] text-left">Products</p>
              <p className="w-[20%]">Kgs</p>
              <p className="w-[20%]">Quantity</p>
              <p className="w-[20%]">Price</p>
            </div>

            <div className=" overflow-y-scroll scroll-smooth h-[75vh] mt-1 scrollNone p-5">
              {/* CART PRODUCTS */}
              <CheckoutProducts products={products} />
            </div>

            <div className=" w-full flex justify-between border-t-2 pt-2">
              <div className="flex items-end">
                <Link
                  to="/products"
                  className="flex items-center gap-2 py-2 px-7 rounded-3xl bg-black text-base font-normal text-white hover:-translate-x-7 duration-300 "
                >
                  <TfiAngleLeft className="text-white" />
                  Continew Shopping
                </Link>
              </div>

              <div className="w-[30%]">
                <div className="flex justify-between font-bold pt-1 mt-1 text-right">
                  <p>Total Price :</p>
                  <p className="flex items-center gap-1">
                    <TbCurrencyTaka />
                    20000
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CUSTOMER INFO AND PAYMENT METHOOD */}
          <CustomerInfo />
        </div>
      </div>
    </>
  );
};

export default index;

const CheckoutProducts = (props: { products: Products }) => {
  const { products } = props;
  return (
    <>
      {products?.map((product, index) => (
        <div
          className="bg-white w-full h-20 flex  rounded-lg mb-5 border overflow-hidden"
          key={index}
        >
          <div className=" h-20 w-[16%] flex items-center justify-center">
            <img
              src={`${product.image}`}
              alt=""
              className="w-[50%] h-full object-scale-down"
            />
          </div>

          <div className="p-2 text-sm font-semibold flex flex-col justify-between w-[24%]">
            <h1>{product.name}</h1>
            <p className=" font-normal text-xs flex items-center">
              Unite Price <TbCurrencyTaka />
              <span className="font-medium">200</span>
            </p>
          </div>

          <div className="text-sm flex items-center w-[20%]">
            <div className=" border w-16 h-8 rounded-3xl flex justify-center items-center gap-1 m-auto font-semibold">
              <p>
                5<span className="font-normal">K.G</span>
              </p>
            </div>
          </div>

          <div className="w-[20%] flex items-center">
            <div className=" flex gap-4 items-center  m-auto px-4 rounded-3xl border h-8">
              <button>
                <AiOutlineMinus />
              </button>
              <p className=" font-semibold text-lg">4</p>
              <button>
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          <div className="w-[20%] flex items-center">
            <div className=" flex gpa-2 items-center px-5 text-left ml-auto font-semibold">
              <TbCurrencyTaka />
              <p>5000</p>
              <button>
                <HiXMark className=" ml-7 text-xl" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const CustomerInfo = () => {
  return (
    <div className=" w-2/6 h-full">
      <div className=" bg-gray-100 text-black ml-2 rounded-xl p-8 relative h-full flex flex-col justify-between">
        <div className=" mt-5 text-sm space-y-5">
          <h1 className=" text-2xl font-semibold border-b-2 ">Info</h1>
          <p>Payment methood</p>

          <div className=" flex justify-between items-center">
            <button className="flex items-center gap-2 border-white border rounded-3xl px-7 py-2 focus:bg-white focus:text-black duration-300">
              <FaCreditCard /> Online
            </button>
            <button className="flex items-center gap-2 border-white border rounded-3xl px-7 py-2 focus:bg-white focus:text-black duration-300">
              <FaMoneyBillWave />
              Cash On
            </button>
          </div>
          <AddressSelicked />
        </div>

        <div className="space-y-8">
          <Cupon />
          <PriceSection />
          <button className=" bg-sky-400 w-full py-3 rounded-3xl">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
const AddressSelicked = () => {
  return (
    <div className="text-sm">
      <p>Address</p>
      <div className="flex justify-between items-center text-2xl mb-5 mt-2">
        <button className="text-sky-500">
          <AiFillHome />
        </button>
        <button>
          <ImOffice />
        </button>
        <button>
          <FaHeart />
        </button>
        <button>
          <AiFillPlusCircle />
        </button>
      </div>

      <div className="mt-10 space-y-4">
        <div className=" flex items-center">
          <p className=" w-1/6">Home</p>
          <p className=" w-1/6">:</p>
          <p className=" w-4/6">
            Notumbazar 100 fit, NuraCharl Green Land T-11
          </p>
        </div>

        <div className=" flex items-center">
          <p className=" w-1/6">Phone</p>
          <p className=" w-1/6">:</p>
          <p className=" w-4/6">01600000001</p>
        </div>

        <div className=" flex items-center">
          <p className=" w-1/6">Map</p>
          <p className=" w-1/6">:</p>
          <a
            href="https://goo.gl/maps/SjYrN7oGxnfg5cT58"
            target="_blank"
            className=" w-4/6"
          >
            https://goo.gl/maps/SjYrN7oGxnfg5cT58
          </a>
        </div>
      </div>
    </div>
  );
};
const Cupon = () => {
  return (
    <div className="flex items-center justify-between border h-9 rounded-md w-full pl-2 overflow-hidden">
      <input
        type="text"
        placeholder="Cupon..."
        className=" flex-1 border-none outline-none bg-transparent h-full px-2 text-sm"
      />
      <button className=" bg-white text-black h-10 px-5">Apply</button>
    </div>
  );
};
const PriceSection = () => {
  return (
    <div className="text-sm font-semibold mt-3">
      <div className="flex justify-between pt-1 mt-1 ">
        <p>Subtotal :</p>
        <p className="flex items-center gap-1">
          <TbCurrencyTaka />
          00.00
        </p>
      </div>

      <div className="flex justify-between pt-1 mt-1 ">
        <p>Discount :</p>
        <p className="flex items-center gap-1">
          <TbCurrencyTaka />
          00.00
        </p>
      </div>

      <div className="flex justify-between  pt-1 mt-1 ">
        <p>Total Price :</p>
        <p className="flex items-center gap-1">
          <TbCurrencyTaka />
          707007
        </p>
      </div>
    </div>
  );
};
