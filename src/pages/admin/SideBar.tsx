import { useState } from "react";
import {
  AiFillAppstore,
  AiFillDashboard,
  AiFillHome,
  AiOutlineApartment,
  AiOutlineAppstoreAdd,
  AiOutlineMenu
} from "react-icons/ai";
import { FaChartPie, FaQuestionCircle } from "react-icons/fa";
import { FcLineChart } from "react-icons/fc";
import { GiNoodles } from "react-icons/gi";
import { RiBarChartFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import adminImg from "../../assets/nobita.jpg";
const Sidebar = () => {
  const homeArr = [
    { icon: <AiFillHome />, name: "Banner", link: "/admin/banner" },
    { icon: <GiNoodles />, name: "Recipes", link: "/admin/recipes" },
    { icon: <AiOutlineApartment />, name: "Partnarship", link: "/" },
    { icon: <FaQuestionCircle />, name: "FAQ", link: "/" },
  ];
  const productArr = [
    { icon: <AiFillAppstore />, name: "All Products", link: "/" },
    { icon: <AiOutlineAppstoreAdd />, name: "Add Products", link: "/" },
  ];
  const customersArr = [
    { icon: <RiBarChartFill />, name: "Manage Team", link: "/" },
    { icon: <FaChartPie />, name: "Contact Infomation", link: "/" },
    { icon: <FcLineChart />, name: "Invoice Balance", link: "/" },
  ];
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className={`${sidebar ? "w-40" : "w-60"} h-full overflow-y-scroll`}>
      <div className=" h-full w-full px-5 pt-5">
        <div className="flex justify-between items-center text-2xl text-white">
          <h2>ADMIN</h2>
          <button
            className=" p-2 rounded-full ml-3 hover:bg-[#2c3e5e] duration-300 text-xl"
            onClick={handleSidebar}
          >
            <AiOutlineMenu />
          </button>
        </div>

        <div className="my-7 text-center space-y-4">
          <div className=" h-24 w-24 m-auto rounded-full overflow-hidden ring-2 ring-[#44d3ad]">
            <img src={adminImg} className="h-full w-full object-cover" alt="" />
          </div>
          <div className=" text-3xl font-bold text-white">
            <h2>Jahidul Islam</h2>
            <p className="text-sm text-[#44d3ad] font-semibold">Fancy Admin</p>
          </div>
        </div>
        <Link
          to="/admin"
          className=" flex w-full items-center text-base px-4 text-white gap-4"
        >
          <AiFillDashboard /> Dashboard
        </Link>

        <SidebarLink title="Home" arr={homeArr} />
        <SidebarLink title="Products" arr={productArr} />
        <SidebarLink title="Customers" arr={customersArr} />
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarLink = ({ title, arr }: { title: string; arr: any }) => {
  return (
    <div className="mt-4">
      <p className="text-gray-400">{title}</p>
      {arr.map((item: any, index: boolean) => (
        <NavLink
          to={item.link}
          key={index + ""}
          className="flex w-full items-center text-sm pl-4  gap-4 my-1 py-3 "
          style={({ isActive }) =>
            isActive ? { color: "#44d3ad" } : { color: "white" }
          }
        >
          <div className="text-lg">{item.icon}</div>
          <p>{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

SidebarLink;
