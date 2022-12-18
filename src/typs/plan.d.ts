export type SKU = {
  active: Boolean;
  unit: "KG" | "Gram";
  price: Number;
  size: Number;
};

export type Product = {
  id: Number;
  name: String;
  image: String;
  subTitle: String;
  quantity: Number;
  isPopular: Boolean;
  SKUs: SKU[];
  wish: Boolean;
  discription: String;
};

export type Products = Product[];



// CUSTOMER
type Customer = {
  customerId: String;
  customerName: String;
  joinDate: String;
  phoneNumber: Number;
  familyMembers: Number;
  address: Address[];
  favProducts: Products;
  wishProducts: UserWish[];
  purchasedProducts: PurchProduct[];
  totalTransactions: Number;
  rank: Number;
  stars: Number;
  totalReward: PurchProduct[];
  totalReturn: PurchProduct[];
};

type UserWish = { productId: String };

type Address = {
  city: String;
  area: String;
  road: String;
  buldingName: String;
  coords: Coordinates;
};

type Coordinates = { latitude: String; longitude: String };

type PurchProduct = {
  productId: String;
  productImage: String;
  productName: String;
  quantity: Number;
  productPrice: Number;
  SKU: Number;
  purchDate: String;
  returnDate: String;
};

// RECIPE SECTION
export type Recipes = Recipe[];
export type Recipe = {
  id: String;
  image: String;
  name: String;
  discription: String;
  ingredients: String[];
};

// QUESTION SECTION
type Questions = Question[];
type Question = {
  questionId: String;
  questionName: String;
  questionDiscription: String;
};

// ===============================
// SHUKRAN E-COM FUNCTION LISTING

// viewProduct(product)

// handleQuantity(product, Kg)

// productIncrementAndDecrement(product)

// addToCart(product)

// removToCart(product)

// placeOrder id login and Address Secected otheroys redirect to login and add address

// select payment methood Cashon Or CartPay if CartPay othreoys add payment methood

// everyting is done then placeOrder

// placeOrder to sent all product and customer details into database

const viewProduct = (product) => {
  // setviewProduct
};

const controllQuantity = (product, action) => {
  // increment or decrement quantity of this product
};

const handleSizeByPrice = (product, size) => {
  // setPrice onClick product size
};

const handleWish = (product) => {
  // make wish proparty true
};

const addToCart = (product) => {
  // take the product and put it on CART ARRAY
};

const removToCart = (product) => {
  // delet the product to the CART ARRAY
};

// CHECKOUT
// First Login or Sign up
const placeOrder = (cartProducts) => {
  // if not logedin redirect to login page
  // if  cart payment selected then start the payment process
  // take all cartProducts and posted to database with customer information
  // return a data delebary date and success order fidbag
};
