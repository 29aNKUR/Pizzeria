import { createSlice } from "@reduxjs/toolkit";
import OrderDetails from "../lib/types";

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    orders: [] as OrderDetails[],
    orderId: 0,
  },
  reducers: {
    placeOrder: (state, action) => {
      state.orders.push({
        orderId: state.orderId,
        ...action.payload,
        stage: "Order Placed",
        startTime: new Date(),
      });
      state.orderId += 1;
    },

    updateOrderStage: (state, action) => {
      state.orders = state.orders.map((order) =>
        order.orderId === action.payload.orderId
          ? { ...order, stage: action.payload.stage, prevTime: order.timer }
          : order
      );
    },

    cancelOrder: (state, action) => {
        state.orders = state.orders.filter((order) => order.orderId !== action.payload);
    },

    updateOrderTime: (state, action) => {
        state.orders = state.orders.map((order) => order.orderId === action.payload.orderId ? {...order, timer: action.payload.timer}: order)
    }

  },
});

export const { placeOrder, updateOrderStage, cancelOrder, updateOrderTime } = pizzaSlice.actions;

export default pizzaSlice.reducer;