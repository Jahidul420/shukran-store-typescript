import chinigura from "../assets/opt/products/chinigura.png";
import dchinigura from "../assets/opt/products/dChinigura.png";
import katari from "../assets/opt/products/katari.png";
import najirshail from "../assets/opt/products/najirshail.png";
import { Product } from "../typs/plan";

const productsArr: Product[] = [
  {
    id: 100,
    name: "Nahirshil Rice",
    subTitle: "DINAJPUR PLUM POWDER",
    isPopular: false,
    quantity: 1,
    image: najirshail,
    SKUs: [
      { active: true, unit: "KG", size: 1, price: 200 },
      { active: false, unit: "KG", size: 5, price: 1000 },
      { active: false, unit: "KG", size: 10, price: 2000 },
      { active: false, unit: "KG", size: 25, price: 5000 },
    ],
    wish: false,
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 101,
    name: "Chinigura Rice",
    subTitle: "DINAJPUR PLUM POWDER",
    isPopular: false,
    quantity: 1,
    image: dchinigura,
    SKUs: [
      { active: true, unit: "KG", size: 1, price: 200 },
      { active: false, unit: "KG", size: 5, price: 1000 },
      { active: false, unit: "KG", size: 10, price: 2000 },
      { active: false, unit: "KG", size: 25, price: 5000 },
    ],
    wish: false,
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 102,
    name: "katari Rice",
    subTitle: "DINAJPUR PLUM POWDER",
    isPopular: true,
    quantity: 1,
    image: katari,
    SKUs: [
      { active: true, unit: "KG", size: 1, price: 200 },
      { active: false, unit: "KG", size: 5, price: 1000 },
      { active: false, unit: "KG", size: 10, price: 2000 },
      { active: false, unit: "KG", size: 25, price: 5000 },
    ],
    wish: false,
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 103,
    name: "Miniket Rice",
    subTitle: "DINAJPUR PLUM POWDER",
    isPopular: false,
    quantity: 1,
    image: chinigura,
    SKUs: [
      { active: true, unit: "KG", size: 1, price: 200 },
      { active: false, unit: "KG", size: 5, price: 1000 },
      { active: false, unit: "KG", size: 10, price: 2000 },
      { active: false, unit: "KG", size: 25, price: 5000 },
    ],
    wish: false,
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export default productsArr;
