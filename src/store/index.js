import { createStore, combineReducers } from "redux";
import { pizzaReducer } from "./pizzaReducer";
import { comboReducer } from "./comboReducer";

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    combo: comboReducer,
})
export const store = createStore(rootReducer);