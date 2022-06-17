// import { ReactReduxContext } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import Products from "./pages/Products"
import Product from "./pages/product";
import ShoppingCart from "./pages/ShoppingCart";


function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="/products" element={<Products />} exact/>
            <Route path="/cart" element={<ShoppingCart />}  />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
