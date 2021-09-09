import { createStore, combineReducers, applyMiddleware } from "redux";

// API
import logger from "redux-logger";


//states
import { stockReducer } from "./stockReducer";

import { pizzaReducer } from "./pizzaReducer";
import { comboReducer } from "./comboReducer";
import { snacksReducer } from "./snacksReducer";
import { dessertsReducer } from './dessertsReducer';
import { saucesReducer } from './saucesReducer';
import { beveragesReducer } from './beveragesReducer';
import { juicesReducer } from './juicesReducer';
import { basketReducer } from "./basketReducer";
import { basketSumReducer } from "./basketSumReducer";


import { aboutReducer} from './aboutReducer';

import { popupReducer } from "./popupReducer";

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
    basket: basketReducer,
    basketSum: basketSumReducer,
    popup: popupReducer
    
})
export const store = createStore(rootReducer, applyMiddleware(logger));