//Action Creator

export const showProduct=(product)=>{
    return{
        type:"SHOW_PRODUCT",
        payload:product
    }
}

export const setLoading=(status)=>{
    return{
        type:"SET_LOADING",
        payload:status
    }
}
export const setError=(error)=>{
    return{
        type:"SET_ERROR",
        payload:error
    }
}