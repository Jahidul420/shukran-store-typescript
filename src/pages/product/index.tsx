import { motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import pattern from "../../assets/pattern.png";
import img1 from "../../assets/rice1-min.jpg";
import img2 from "../../assets/rice2-min.jpg";
import img3 from "../../assets/rice3-min.jpg";
import KgButton from "../../components/KgButton";
import Nav from "../../components/Nav";
const index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Nav />
      <div className="flex justify-between w-screen -mt-16 sticky scroll-smooth">
        <div className=" w-[60%] h-auto">
          <BgImage bgimg={img1} />
          <BgImage bgimg={img2} />
          <BgImage bgimg={img3} />
        </div>

        <div className="w-[40%] h-screen relative">
          <div className=" h-screen px-20 py-32 text-white bg-black overflow-y-scroll fixed scroll-smooth font-roboto">
            <img
              src={pattern}
              alt=""
              className=" h-full w-full object-cover absolute top-0 left-0 opacity-5 -z-10"
            />
            <div className="text-left space-y-4">
              <h2 className="text-4xl font-lora ">
                Dinajpuri Najishal Boield Rice
              </h2>
              <p className="text-xl">FOR YOUR JOY</p>
              <p className=" font-roboto text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="flex items-center text-4xl font-oswald mt-14">
              <TbCurrencyTaka />
              <p className="w-20">300</p>
              <div className="text-sm space-x-5 ml-10 font-normal font-roboto">
                <KgButton kg={5} />
                <KgButton kg={10} />
                <KgButton kg={15} />
                <KgButton kg={25} />
              </div>
            </div>
            <div className=" py-5 text-xs font-roboto">
              <Link to="/product">
                Pay in 3 interest-free payments on purchases of 5% to 20% off
                with BKASH<p className=" underline">LEARN MORE</p>
              </Link>
            </div>
            <p className=" py-2 text-xs font-roboto">
              Free Delevary in Dhaka on orders over 1000 tk
              <Link to="/product" className=" underline ml-2">
                DELIVERY INFO
              </Link>
            </p>
            <div className="flex justify-between items-center font-zen mt-10">
              <p className="text-xl">Quantity</p>
              <button>
                <FaMinus />
              </button>
              <p className="h-9 w-10 border flex justify-center items-center text-xl">
                3
              </p>
              <button>
                <FaPlus />
              </button>
              <button className="w-[50%] py-3 rounded-full bg-white text-black font-oswald">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full sticky bg-white/30 backdrop-blur-sm border-t">
        <h2>Hello world i amd from another worl</h2>
      </div>
    </motion.div>
  );
};

export default index;

const BgImage = (props: { bgimg: String }) => {
  const { bgimg } = props;
  return (
    <div className="h-[100vh] w-full">
      <img src={`${bgimg}`} alt="" className=" h-full w-full object-cover" />
    </div>
  );
};
