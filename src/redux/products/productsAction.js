// Action Creatore
export const getProduct = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const setLoading=(status)=>{
  return{
    type:'SET_LOADING',
    payload:status
  }

}

export const setError=(error)=>{
  return{
    type:'SET_ERROR',
    payload:error
  }
}
