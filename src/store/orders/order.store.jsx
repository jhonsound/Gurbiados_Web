import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";

const storeApi = (set) => ({
  orders: null,
  createOrders: (orderData) => {
    axios.post("http://localhost:3000/api/orders", orderData);
  },
  getOrders: () => {
    axios
      .get("http://localhost:3000/api/orders")
      .then((response) => {
        set({ orders: response.data });
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  },
  setUser: (newUser) => set({ user: newUser }),
  clearUser: () => set({ user: null }),
});

export const useOrderStore = create()(
  devtools(persist(storeApi, { name: "order-storage" }))
);
