import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  increment,
  decrement,
  removeFromCart,
  clearCart,
} from "../redux/cart/cartAction";
const ShoppingCart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    dispatch(increment(productId));
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Cart Updated",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const handleDectement = (productId) => {
    dispatch(decrement(productId));
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Cart Updated",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Product remove",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const handleCrearCart = () => {
    dispatch(clearCart());
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Cart Empty",
      showConfirmButton: false,
      timer: 3000,
    });
 
  };
  return (
    <div className="container">
      <div className="row mt-5">
        {cart.length===0 ?  <p>Cart Is Empty</p> 
        :
          <div className="col-lg-12 pl-3 pt-3">
            <table className="table table-hover border bg-white">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th style={{ width: "10%" }}>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart &&
                  cart.map((product) => (
                    <tr key={product.id}>
                      <td className="align-middle">
                        <div className="row">
                          <div className="col-lg-2">
                            <img
                              src={product.image}
                              alt="..."
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-lg-10">
                            <h5> {product.name} </h5>
                            <p> {product.description} </p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">{product.price}</td>
                      <td className="align-middle">
                        <button
                          className="btn btn-sm btn-dark me-2"
                          onClick={() => handleIncrement(product.id)}
                        >
                          +
                        </button>
                        <span>{product.qty}</span>
                        <button
                          className="btn btn-sm btn-dark ms-2"
                          onClick={() => handleDectement(product.id)}
                        >
                          -
                        </button>
                      </td>
                      <td className="align-middle">
                        {product.price * product.qty}
                      </td>
                      <td className="align-middle" style={{ width: "15%" }}>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleRemoveFromCart(product.id)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <button
                      href="/"
                      className="btn btn-dark"
                      onClick={handleCrearCart}
                    >
                      Clear Cart
                    </button>
                  </td>
                  <td colspan="2" className="hidden-xs"></td>
                  <td
                    className="hidden-xs text-center"
                    style={{ width: "15%" }}
                  >
                    <strong>
                      Total :{" "}
                      {cart.reduce((total, product) => {
                        return total + product.price * product.qty;
                      }, 0)}
                    </strong>
                  </td>
                  <td>
                    <a href="/" className="btn btn-success btn-block">
                      Checkout
                    </a>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        }
      </div>
    </div>
  );
};

export default ShoppingCart;
