import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { v4 } from "uuid";
import { calculateTotal, clearCart } from "../redux-toolkit/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const cartTotal = useSelector((state) => calculateTotal(state.cart));

  const handleCheckout = () => {
    dispatch(clearCart());
  };

  return (
    <div className="page-container">
      <h1 className="my-5 text-5xl font-semibold text-center uppercase text-skyBlue">
        your bill
      </h1>
      <div className="p-5 border rounded-lg border-cloudGray">
        {/* Display empty cart */}
        {cart.length <= 0 && (
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl font-semibold text-skyBlue">
              Your cart is currently empty
            </h1>
            <span className="text-cloudGray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[150px] h-[150px]"
              >
                <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </span>
            <p className="w-full max-w-xs text-sm text-center text-cloudGray">
              Before proceed to checkout you must add products to your cart.
            </p>
            <Link
              className="px-6 py-3 font-medium capitalize rounded-lg bg-skyBlue bg-opacity-90 hover:bg-opacity-80"
              to="/"
            >
              Return to home
            </Link>
          </div>
        )}

        {/* Show cart */}
        <div className="flex flex-col gap-3 h-full max-h-[450px] overflow-y-auto">
          {cart.length > 0 &&
            cart.map((item) => <CartItem key={v4()} data={item} />)}
        </div>

        {cart.length > 0 && (
          <div className="flex flex-col gap-5 pt-2 border-t border-cloudGray">
            <span className="text-3xl font-semibold text-right text-skyBlue">
              {`Total: ${cartTotal}`}
            </span>
            <button
              onClick={handleCheckout}
              className="flex items-center justify-center w-full py-4 font-semibold text-white capitalize rounded-lg cursor-pointer bg-skyBlue bg-opacity-90 hover:bg-opacity-80"
            >
              check out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
