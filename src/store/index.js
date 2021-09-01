import { createStore, combineReducers } from "redux";

import { stockReducer } from "./stockReducer";

import { pizzaReducer } from "./pizzaReducer";
import { comboReducer } from "./comboReducer";
import { snacksReducer } from "./snacksReducer";
import { dessertsReducer } from './dessertsReducer';
import { saucesReducer } from './saucesReducer';
import { beveragesReducer } from './beveragesReducer';
import { juicesReducer } from './juicesReducer';


import { aboutReducer} from './aboutReducer';

const rootReducer = combineReducers({
    stock: stockReducer,
    pizza: pizzaReducer,
    combo: comboReducer,
    snacks: snacksReducer,
    desserts: dessertsReducer,
    sauces: saucesReducer,
    beverages: beveragesReducer,
    juices: juicesReducer,
    about: aboutReducer,
    
})
export const store = createStore(rootReducer);