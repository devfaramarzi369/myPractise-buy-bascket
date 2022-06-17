const initialState = {
  product: {},
  loading: true,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_PRODUCT":
      return { ...state, product: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
export default productReducer;
