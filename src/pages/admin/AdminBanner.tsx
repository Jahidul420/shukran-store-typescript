import { useState } from "react";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import bannerBg from "../../assets/tvc.mp4";
type Props = {};

const AdminBanner = (props: Props) => {
  const [brandName, setBrandName] = useState("shukran");
  const [bannerTitel, setBannerTitel] = useState("Gratitud Bound");

  const [subTitel, setSubTitel] = useState("Culture Festival");
  const [description, setDescription] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
  );

  return (
    <div className=" -mt-16 relative h-[100vh] w-full overflow-hidden">
      <video
        src={bannerBg}
        autoPlay
        muted
        loop
        className=" object-cover h-full scale-110 w-full"
      ></video>

      <div className="bg-black/70 absolute top-0 left-0 w-full h-full z-5">
        <input
          type="file"
          placeholder="Upload banner video"
          className=" text-black px-2 bg-none bg-transparent "
        />
      </div>

      <div className=" absolute top-0 left-0 h-full text-white px-10">
        <div className="h-[80%] flex flex-col justify-center font-austin w-auto space-y-3">
          <input
            type="text"
            className="text-4xl uppercase bg-transparent border-white border p-3 w-3/6"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
          <input
            type="text"
            className="text-8xl font-medium bg-transparent p-2 border-white border"
            value={bannerTitel}
            onChange={(e) => setBannerTitel(e.target.value)}
          />
        </div>
        <div className="h-[20%] w-full  flex justify-between items-center text-sm">
          <div className="w-5/6 flex mr-40 space-x-6">
            <div className="space-y-3">
              <input
                type="text"
                className="text-xl font-semibold bg-transparent p-2 border-white border"
                value={subTitel}
                onChange={(e) => setSubTitel(e.target.value)}
              />
              <p className="text-xs">11 / 20 / 2023 </p>
            </div>
            <div className="h-16 bg-white w-[2px] "></div>

            <textarea
              className=" bg-transparent border-white border w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="w-2/6 flex items-center gap-x-8 text-2xl justify-end">
            <Link to="/">
              <BsFacebook />
            </Link>
            <Link to="/">
              <AiFillYoutube />
            </Link>
            <Link to="/">
              <AiOutlineInstagram />
            </Link>
            <Link to="/">
              <AiOutlineTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBanner;
