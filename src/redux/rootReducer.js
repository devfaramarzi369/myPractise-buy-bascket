import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import productReducer from "./product/productReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  productsReducer,
  productReducer,
  cartReducer,
});
export default rootReducer;
