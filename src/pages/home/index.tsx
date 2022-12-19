import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import HomeBanner from "./HomeBanner";
import HomeMap from "./HomeMap";
import HomeProducts from "./HomeProducts";
import HomeRecipe from "./HomeRecipes";
import PartnarShip from "./PartnarShip";
import PopularProducts from "./PopularProducts";
import Questions from "./Questions";
export default function Home() {
  // const counter= useSelector(selectCounter)
  //   const dispatch= useDispatch()
 console.log("rendered")
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <button className="py-2 px-5 bg-black text-white rounded-lg m-40"
        onClick={()=>dispatch(increment())}
      >
        increment: {counter.value}
      </button>
      
       <button className="py-2 px-5 bg-black text-white rounded-lg m-40"
        // onClick={()=>dispatch(decrement())}
      >
        de: {counter.pc}
      </button> */}
      <Nav />
      <HomeBanner />
      <PopularProducts />
      <HomeProducts />
      <HomeMap />
      <Questions />
      <HomeRecipe />
      <PartnarShip />
      <Footer />
    </motion.div>
  );
}
