import { useParams,Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showProduct, setLoading, setError } from "../redux/product/productAction";
const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(state=>state.productReducer);

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
  const convertId=parseInt({id}.id)

  const hardCodeOneProduct=hardCodeProducts.find(x=>x.id ===convertId)

  useEffect(() => {
    dispatch(setLoading(true));
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(setLoading(false));
        // dispatch(showProduct(data));
        dispatch(showProduct(hardCodeOneProduct));

        dispatch(setError(null));
      })
      .catch((err) => {
    
        dispatch(setLoading(false));
        dispatch(setError(err.message));
      });
  }, [dispatch]);
  return (
    <div>
      {loading && <p>LOADING !!!</p>}
      <div className="row mt-5 g-3">
        {product && (
          <div className="col-md-3" key={product.id}>
            <div className="card">
              <img className="card-img-top" src={product.image} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                {/*  to={`/product/${product.id}`} */}
                <Link
                  className="btn btn-sm btn-outline-success"
                 
                >
                  Add to cart
                </Link>
                <span>{product.price}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {error && <h4>{error}</h4>}
    </div>
  );
};
export default Product;
