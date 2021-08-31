import { createStore, combineReducers } from "redux";
import { pizzaReducer } from "./pizzaReducer";
import { comboReducer } from "./comboReducer";
import { snacksReducer } from "./snacksReducer";

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    combo: comboReducer,
    snacks: snacksReducer
})
export const store = createStore(rootReducer);