const initialState = {
  cart: localStorage.getItem('_addToCart_') ? JSON.parse(localStorage.getItem('_addToCart_')) : [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const hasProduct = state.cart.find((p) => p.id === action.payload.id)
        ? true
        : false;

      state.cart = hasProduct
        ? state.cart.map((p) =>
            p.id === action.payload.id ? { ...p, qty: p.qty + 1 } : p
          )
        : [...state.cart, { ...action.payload, qty: 1 }];

        localStorage.setItem('_addToCart_',JSON.stringify(state.cart))

      return { ...state, cart: state.cart };

    case "INCREMENT":
      state.cart = state.cart.map((p) =>
        p.id === action.payload ? { ...p, qty: p.qty + 1 } : p
      );
      localStorage.setItem('_addToCart_',JSON.stringify(state.cart))

      return { ...state, cart: state.cart };

    case "DECREMENT":
      let currentProduct = state.cart.find((p) => p.id === action.payload);
      state.cart =
        currentProduct.qty > 1
          ? state.cart.map((p) =>
              p.id === action.payload ? { ...p, qty: p.qty - 1 } : p
            )
          : state.cart;
        localStorage.setItem('_addToCart_',JSON.stringify(state.cart))

      return { ...state, cart: state.cart };

    case "REMOVE_FROM_CART":
      state.cart = state.cart.filter((p) => p.id !== action.payload);
      localStorage.setItem('_addToCart_',JSON.stringify(state.cart))

      return { ...state, cart: state.cart };

      case "CLEAR_CART":
        localStorage.setItem('_addToCart_',[])

        return { ...state, cart: [] };

    default:
      return state;
  }
};
export default cartReducer;
