import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getProduct,
  setLoading,
  setError,
} from "../redux/products/productsAction";
import {addToCart} from '../redux/cart/cartAction'

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productsReducer
  );
  //   const [products, setProducts] = useState(null);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);

  const {cart}=useSelector(state=>state.cartReducer)
  console.log({cart});
  const handleCart=(product)=>{
    dispatch(addToCart(product))
  }

  const hardCodeProducts = [
    {
      id: 1,
      name: "Samsung Galaxy S20",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://dkstatics-public.digikala.com/digikala-products/2e16bad7f6ea176ae6502406d7342afe9982fbf7_1608030120.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
      price: 300,
    },

    {
      id: 2,
      name: "iPhone 12",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://dkstatics-public.digikala.com/digikala-products/9f5d8f6583a7289a096a9180ac88708856f4bd8f_1607433653.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
      price: 500,
    },

    {
      id: 3,
      name: "Redmi Note 8",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://dkstatics-public.digikala.com/digikala-products/113846203.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
      price: 600,
    },

    {
      id: 4,
      name: "Samsung Galaxy A71",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:
        "https://dkstatics-public.digikala.com/digikala-products/120415904.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
      price: 700,
    },
  ];

  useEffect(() => {
    dispatch(setLoading(true));
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setLoading(false));
        dispatch(getProduct(hardCodeProducts));
        dispatch(setError(null));


        // setLoading(false);
        // setProducts(data);
        // setError(null);
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(setError(err.message));

        // setLoading(false);
        // setError(err.message);
      });
  }, [dispatch]);
  return (
    <div className="container">
      {loading && <p>LOADING....</p>}

   
      <div className="row mt-5 g-3">
        {products &&
          products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card">
                <img className="card-img-top" src={product.image} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  {/* <Link className="btn btn-sm btn-outline-success" to="/cart" onClick={()=>handleCart(product)}>
                    Add to cart
                  </Link> */}
                  <button className="btn btn-sm btn-outline-success" onClick={()=>handleCart(product)}>
                    Add to cart
                  </button>
                  <Link className="btn btn-sm btn-outline-success" to={`/product/${product.id}`}>
                    Show Product
                  </Link>
                  <span>{product.price}</span>
                </div>
              </div>
            </div>
          ))}
      </div>


      {/* {products &&
        products.map((x) => (
            <div key={x.id}>
            <h3>{x.title}</h3>
            <img src={x.url} style={{width:'111px'}}/>
          </div>
        )
        )} */}
      {error && <p>{error}</p>}
    </div>
  );
};
export default Products;
