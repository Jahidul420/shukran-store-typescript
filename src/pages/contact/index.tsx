import { motion } from "framer-motion";
import { AiFillYoutube } from "react-icons/ai";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/shukranLogo.png";
import Nav from "../../components/Nav";
const Contact = () => {
  return (
    <motion.div
      className="bg-[#43283A] h-screen w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Nav />
      <div className="px-40 flex justify-between items-center h-full w-full -mt-16">
        <div className="w-[50%] text-white space-y-10">
          <div className="flex-shrink-0 flex items-center gap-3 mb-10">
            <img src={logo} alt="" className="h-20" />
            <h1 className=" text-3xl font-semibold">SHUKRAN</h1>
          </div>
          <div className="w-4/6 space-y-7 ml-10">
            <ContactLocation
              icon={<ImOffice />}
              name="Head Office"
              address=" Road 4, House 67, Block C, 6th Floor Banani, Dhaka 1213, Bangladesh"
            />
            <ContactLocation
              icon={<GiFactory />}
              name="Factory Office"
              address=" 753 Purbo Jagannathpur Burampur, Dinajpur, Bangladesh."
            />
            <ContactLocation
              icon={<BsPhoneVibrateFill />}
              name="Phone"
              address="Mobile: +88017 2909 9077 Toll free: 800 800 1000"
            />

            <ContactLocation
              icon={<MdEmail />}
              name="Email"
              address="hello@shukran.com.bd"
            />
          </div>

          <div className=" lg:w-[60%] text-white space-y-1 ">
            <p className="">-Follow Us</p>
            <ul className=" flex justify-between text-3xl">
              <li>
                <a href={"somthing"}>
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href={"somthing"}>
                  <AiFillYoutube />
                </a>
              </li>
              <li>
                <a href={"somthing"}>
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href={"somthing"}>
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[50%] pl-24">
          <h1 className=" lg:text-4xl text-3xl mt-14 mb-3 lg:mt-0 font-semibold text-white sm:w-fit lg:mb-10">
            Share your thoughts with us
          </h1>
          <form className=" text-slate-200">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="First Name"
                className="w-[48%] bg-[#381F30] mt-5 rounded-md drop-shadow-lg px-3 h-12"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-[48%] bg-[#381F30] mt-5 rounded-md drop-shadow-lg px-3 h-12"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#381F30] mt-5 rounded-md drop-shadow-lg px-3 h-12"
            />
            <textarea
              name="txtname"
              placeholder="Message"
              className="w-full bg-[#381F30] mt-5 rounded-md drop-shadow-lg px-3 h-24 py-1"
            />
          </form>
          <button className="w-full bg-[#381F30] text-slate-200 mt-5 rounded-md drop-shadow-lg px-3 h-12 ">
            Submit
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

const ContactLocation = (props: {
  icon: any;
  name: String;
  address: String;
}) => {
  const { icon, name, address } = props;
  return (
    <div className="flex items-center gap-x-7 text-sm">
      <div className="text-3xl">{icon}</div>
      <div>
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p>{address}</p>
      </div>
    </div>
  );
};
