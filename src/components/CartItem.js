import React from "react";
import { useDispatch } from "react-redux";
import { decreaseProduct, increaseProduct } from "../redux-toolkit/cartSlice";

const btnStyle =
  "w-[45px] h-[45px] text-xl font-semibold flex items-center justify-center rounded-full bg-skyBlue bg-opacity-90 hover:bg-opacity-70 cursor-pointer";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleIncrease = (productItem) => {
    dispatch(increaseProduct(productItem));
  };
  const handleDecrease = (productItem) => {
    dispatch(decreaseProduct(productItem));
  };

  return (
    <div className="flex items-center justify-between w-full p-3 select-none">
      <div className="flex items-start gap-3">
        <div className="relative w-[150px]  h-[100px] overflow-hidden rounded-md group">
          <img className="img-cover" src={data.image} alt="" />
        </div>
        <div className="flex-1 w-full max-w-sm">
          <h1 className="text-lg font-semibold text-skyBlue">{data.title}</h1>
          <span className="text-xl font-bold text-cloudGray">
            {data.price}$
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span onClick={() => handleIncrease(data)} className={`${btnStyle}`}>
          +
        </span>
        <span className="w-[35px] flex items-center justify-center h-[35px] font-semibold text-xl text-cloudGray">
          {data.quantity}
        </span>
        <span onClick={() => handleDecrease(data)} className={`${btnStyle}`}>
          -
        </span>
      </div>
    </div>
  );
};

export default CartItem;
