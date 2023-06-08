import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
  searchQuery,
  setQuery,
  setSelectedCategory,
} from "../redux-toolkit/productSlice";
import { v4 } from "uuid";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, selectedCategory } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.products);
  const filteredProducts = useSelector((state) => searchQuery(state.products));

  useEffect(() => {
    dispatch(fetchProducts(selectedCategory));
    dispatch(fetchCategories());
  }, [dispatch, selectedCategory]);

  const handleCategoryChange = (e) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  const handleSearchQuery = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <div className="py-10 page-container">
      <h1 className="mb-10 text-4xl font-semibold text-center uppercase text-skyBlue">
        buy anything you like here...
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 capitalize">
          <label htmlFor="filter">Filter products: </label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-1 text-text_1"
            id="filter"
          >
            {categories.length > 0 &&
              categories.map((category) => (
                <option key={v4()} value={category}>
                  {category}
                </option>
              ))}
          </select>
        </div>
        <input
          onChange={handleSearchQuery}
          className="w-full max-w-[300px] px-4 py-3 bg-transparent border rounded-lg text-skyBlue border-cloudGray outline-skyBlue outline-1"
          type="text"
          placeholder="Search your products..."
        />
      </div>
      {loading && (
        <div className="flex mt-20 items-center mx-auto justify-center w-[80px] h-[80px] border-[8px] rounded-full border-skyBlue animate-spin border-t-transparent"></div>
      )}
      <div className="grid grid-cols-4 gap-5 mt-10">
        {!loading &&
          filteredProducts.length > 0 &&
          filteredProducts.map((item) => (
            <ProductCard key={v4()} data={item} />
          ))}
      </div>
    </div>
  );
};

export default Products;
