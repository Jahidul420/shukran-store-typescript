import { Outlet } from "react-router-dom";
import AdminTopBar from "./AdminTopBar";
import SideBar from "./SideBar";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="w-full h-screen flex items-center">
      <div className=" bg-[#252525] h-full px-4">
        <SideBar />
      </div>
      <div className="w-full h-full overflow-y-scroll ">
        <AdminTopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default index;
