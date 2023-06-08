import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux-toolkit/cartSlice";
const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddProduct = (productItem) => {
    dispatch(addProduct(productItem));
  };

  return (
    <div className="flex flex-col gap-4 p-3 rounded-lg bg-deepBlue">
      <div className="group h-[200px] overflow-hidden rounded-lg">
        <img
          className="rounded-lg img-cover"
          src={data.image}
          alt="product-img"
        />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <span className="px-4 py-2 text-xs font-medium capitalize rounded-lg w-fit bg-skyBlue bg-opacity-10 text-skyBlue">
          {data.category}
        </span>
        <h1 className="flex-1 font-semibold text-skyBlue text-ellipsis line-clamp-2">
          {data.title}
        </h1>
        <p className="text-xs text-cloudGray text-ellipsis line-clamp-2">
          {data.description}
        </p>
        <span className="text-3xl font-bold text-cloudGray">{data.price}$</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-text_3">
          <span>{data?.rating?.count}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
          </span>
        </div>
        <div className="flex items-center gap-2 font-semibold text-text_3">
          <span>{data?.rating?.rate}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
      <button
        onClick={() => handleAddProduct(data)}
        className="flex items-center justify-center w-full py-3 font-semibold text-white capitalize rounded-lg cursor-pointer bg-skyBlue bg-opacity-90 hover:bg-opacity-80"
      >
        add to cart
      </button>
    </div>
  );
};

export default ProductCard;
