import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import preLocadimg from "../../assets/pattern.png";
type Props = {};
const HomeBanner = (props: Props) => {
  return (
    <div className=" -mt-16 relative h-[100vh] w-full overflow-hidden">
      <video
        src={bgLink}
        autoPlay
        muted
        loop
        preload="none"
        poster={preLocadimg}
        className=" object-cover h-full scale-110 w-full"
      ></video>

      <div className="bg-black/70 absolute top-0 left-0 w-full h-full z-5"></div>

      <div className=" absolute top-0 left-0 h-full w-full text-white px-10">
        <div className="h-[80%] flex flex-col justify-center font-austin">
          <h2 className="text-4xl ">SHUKRAN</h2>
          <h1 className="text-8xl font-medium">
            GRATITUDE <br></br> BOUND
          </h1>
        </div>
        <div className="h-[20%] w-full  flex justify-between items-center text-sm">
          <div className="w-3/6 flex mr-40 space-x-6">
            <div className="space-y-3">
              <p className="text-xl font-semibold">Culture Festival </p>
              <p className="text-xs">11 / 20 / 2023 </p>
            </div>
            <div className="h-16 bg-white w-[2px] "></div>
            <p className="w-3/6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
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

export default HomeBanner;

const bgLink =
  "https://rr5---sn-npoeenll.googlevideo.com/videoplayback?expire=1671463513&ei=-S2gY9SIF_KlsfIP-r2KgAU&ip=207.204.228.118&id=o-AI8RaV8GDBklKhsslF1G7JhQc4gSe_OG7WqRJMh6Ik1u&itag=22&source=youtube&requiressl=yes&spc=zIddbJpEzLZFT5J-TVKxM-Ev2Se3QmE&vprv=1&mime=video%2Fmp4&ns=rEepRsvtYFvL7v4ksaZhGVUK&cnr=14&ratebypass=yes&dur=76.022&lmt=1620707255225530&fexp=24001373,24007246&c=WEB&txp=6211222&n=aES1FkT7OhSr2A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAInxwfbzUBdoyYVFG7gJMA37Q5lgRZqBs_Y8wKM1wOcWAiBT6WhRaRMIiV1RLC8emH5I7DugrjZWsKtMO58l3sTj3w%3D%3D&title=Shukran%20Chinigura&rm=sn-a5me7d7z&req_id=50c1c222c58aa3ee&ipbypass=yes&cm2rm=sn-nh5mi0c-q5jl7l,sn-npozd76&redirect_counter=3&cms_redirect=yes&cmsv=e&mh=VH&mip=203.96.227.66&mm=34&mn=sn-npoeenll&ms=ltu&mt=1671441660&mv=m&mvi=5&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgbs_G5PzczofZ5PzKvFaKbkBiwyk6EIY8lfzhxnwxwtcCIQDMqEfu0Ge77TQtXtVxzwANMccYOTarXAWVM6CvDVE-lA%3D%3D";
