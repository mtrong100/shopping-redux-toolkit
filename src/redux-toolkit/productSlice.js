import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FAKESTORE_API } from "../constant/api-config";

// Fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category) => {
    let response;
    if (category === "all") {
      response = await axios.get(FAKESTORE_API);
    } else if (category === "asc" || category === "desc") {
      response = await axios.get(`${FAKESTORE_API}?sort=${category}`);
    } else {
      response = await axios.get(`${FAKESTORE_API}/category/${category}`);
    }
    return response.data;
  }
);

// Fetch Categories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(`${FAKESTORE_API}/categories`);
    const categories = response.data;
    const newCategories = ["all", "asc", "desc", ...categories];
    return newCategories;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    categories: [],
    loading: false,
    selectedCategory: "all",
    query: "",
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const searchQuery = (state) => {
  const filteredProducts = state.data.filter((item) => {
    return item.title.toLowerCase().includes(state.query.trim().toLowerCase());
  });
  return filteredProducts;
};

export const { setSelectedCategory, setQuery } = productSlice.actions;
export default productSlice.reducer;
