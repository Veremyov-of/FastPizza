import { createStore } from "redux";
import { pizzaReducer } from "./pizzaReducer";

export const store = createStore(pizzaReducer);