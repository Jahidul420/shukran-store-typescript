import { useLayoutEffect } from "react";
import { Provider } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import store from "../store";
import AdminBanner from "./pages/admin/AdminBanner";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminRecipe from "./pages/admin/AdminRecipes";
import Admin from "./pages/admin/index";
import Blog from "./pages/blog/index";
import Checkout from "./pages/checkout/index";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Login from "./pages/login/index";
import Product from "./pages/product/index";
import Products from "./pages/products/index";
import Profile from "./pages/profile";
function App() {
  const Warper = ({ children }: { children: any }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Warper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/admin" element={<Admin />}>
              <Route path="banner" element={<AdminBanner />} />
              <Route path="recipes" element={<AdminRecipe />} />
              <Route path="blog" element={<AdminBlog />} />
            </Route>
          </Routes>
        </Warper>
      </div>
    </Provider>
  );
}

export default App;
