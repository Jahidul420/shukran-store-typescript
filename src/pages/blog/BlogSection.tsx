import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { HiShare } from "react-icons/hi2";


const BlogSection = (props: {
  direction: boolean;
  blogText: String;
  title: String;
  subTitle: String;
  blogImg: string
}) => {
  const { direction, blogText, title, subTitle, blogImg } = props;
  return (
    <div className=" my-40">
      <div
        className={`flex items-center ${direction ? " flex-row-reverse" : " "}`}
      >
        <div
          className={` ${
            direction ? "text-right" : " text-left"
          } text-left w-[40%] my-auto lg:relative p-4 lg:p-0 z-10 `}
        >
          <p className=" text-slate-900 text-sm lg:text-base">-{subTitle}</p>
          <h1 className=" lg:text-4xl text-3xl text-black lg:font-bold font-semibold">
            {title}
          </h1>
          <p
            className={`  text-white p-6 bg-[#252525] bg-opacity-90 text-base text-justify ${
              direction ? "-ml-20" : "-mr-20"
            } my-7`}
          >
            {blogText}
          </p>

          <ul
            className={`flex text-black text-3xl justify-between items-center lg:w-[30%] ${
              direction ? "ml-auto" : "mr-auto"
            }`}
          >
            <li>
              <button className="focus:text-sky-500">
                <AiFillLike />
              </button>
            </li>
            <li>
              <button className="focus:text-sky-500">
                <AiFillDislike />
              </button>
            </li>
            <li>
              <button className="focus:text-sky-500">
                <HiShare />
              </button>
            </li>
          </ul>
        </div>

        <div className=" w-[60%] lg:relative absolute top-0 left-0 object-cover h-full ">
        
            <img
              src={blogImg}
              alt=""
              className="object-cover h-full opacity-10 lg:opacity-100 z-0"
            />
          
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
