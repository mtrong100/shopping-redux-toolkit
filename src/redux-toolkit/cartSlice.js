import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const productItem = action.payload;
      const isExistedProduct = state.cart.find(
        (item) => item.id === productItem.id
      );
      if (isExistedProduct) {
        isExistedProduct.quantity += 1;
      } else {
        state.cart.push({ ...productItem, quantity: 1 });
      }
    },
    increaseProduct: (state, action) => {
      const productItem = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === productItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decreaseProduct: (state, action) => {
      const productItem = action.payload;
      if (productItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== productItem.id);
      } else {
        state.cart = state.cart.map((item) =>
          item.id === productItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
    clearCart: (state) => {
      state.cart = [];
      toast.success("Payment success!", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    },
  },
});

export const calculateTotal = (state) => {
  const total = state.cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return total.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const { addProduct, increaseProduct, decreaseProduct, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
