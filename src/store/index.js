import { createStore, combineReducers } from "redux";
import { pizzaReducer } from "./pizzaReducer";
import { comboReducer } from "./comboReducer";
import { snacksReducer } from "./snacksReducer";
import { dessertsReducer } from './dessertsReducer';

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    combo: comboReducer,
    snacks: snacksReducer,
    desserts: dessertsReducer
})
export const store = createStore(rootReducer);