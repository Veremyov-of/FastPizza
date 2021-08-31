import { createStore, combineReducers } from "redux";
import { pizzaReducer } from "./pizzaReducer";
import { comboReducer } from "./comboReducer";
import { snacksReducer } from "./snacksReducer";
import { dessertsReducer } from './dessertsReducer';
import { saucesReducer } from './saucesReducer';
import { beveragesReducer } from './beveragesReducer';
import { juicesReducer } from './juicesReducer';

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    combo: comboReducer,
    snacks: snacksReducer,
    desserts: dessertsReducer,
    sauces: saucesReducer,
    beverages: beveragesReducer,
    juices: juicesReducer,
    
})
export const store = createStore(rootReducer);