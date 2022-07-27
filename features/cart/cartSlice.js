import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  tempOptions: [],
  tempQuantity: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let item = action.payload;
      item = {
        ...item,
        additions: state.tempOptions,
        quantity: state.tempQuantity,
        cartId: state.items.length + 1,
      };
      state.items = [...state.items, item];

      state.tempOptions = [];
      state.tempQuantity = 1;
    },
    removeFromCart: (state, action) => {
      let index = state.items.findIndex(
        (item) => JSON.stringify(item) == JSON.stringify(action.payload)
      );

      let newCart = [...state.items];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.log("item not found in cart");
      }

      state.items = newCart;
    },
    selectedOptions: (state, action) => {
      let index = state.items.findIndex((item) => item.id == action.payload.id);
    },
    tempOptions: (state) => {
      return state.tempOptions;
    },
    tempQuantity: (state) => {
      return state.tempQuantity;
    },
    toggleOption: (state, action) => {
      let tempOptions = state.tempOptions;
      let index = tempOptions.findIndex((option) => option == action.payload);
      if (index >= 0) {
        tempOptions.splice(index, 1);
      } else {
        tempOptions = [...tempOptions, action.payload];
      }
      state.tempOptions = tempOptions;
    },
    updateSelectedOptions: (state, action) => {
      state.tempOptions = action.payload;
    },
    updateQuantity: (state, action) => {
      state.tempQuantity = action.payload;
    },
    itemsCount: (state) => {
      return state.items.length;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  selectedOptions,
  toggleOption,
  tempOptions,
  tempQuantity,
  updateSelectedOptions,
  updateQuantity,
  itemsCount,
  clearCart,
} = cartSlice.actions;

export const getCartItems = (state) => {
  return state.cartSlice.items;
};

export default cartSlice.reducer;
