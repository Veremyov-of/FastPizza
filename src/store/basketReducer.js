const initialState = {
    basketPizza: [],
    basketCombo: [],
    basketSnacks: [],
    basketDesserts: [],
    basketSauces: [],
    basketBeverages: [],
    basketJuices: []
}

export const basketReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PIZZA':
            for(let i = 0; i < state.basketPizza.length; i++) {
                if(state.basketPizza[i].name === action.payload.name) {
                    if(state.basketPizza[i].size === action.payload.size) {
                            state.basketPizza[i].sum = state.basketPizza[i].sum + 1;
                            return state;
                    }
                }
            }
            state.basketPizza.push(action.payload);
            return state;

        case 'ADD_COMBO':
            for(let i = 0; i < state.basketCombo.length; i++) {
                if(state.basketCombo[i].name === action.payload.name) {
                    if(state.basketCombo[i].pizzaCombo === action.payload.pizzaCombo) {
                            state.basketCombo[i].sum = state.basketCombo[i].sum + 1;
                            return state;
                    }
                }
            }
            state.basketCombo.push(action.payload);
            return state;

        case 'ADD_SNACKS':
            for(let i = 0; i < state.basketSnacks.length; i++) {
                if(state.basketSnacks[i].name === action.payload.name) {
                    if(state.basketSnacks[i].size === action.payload.size) {
                            state.basketSnacks[i].sum = state.basketSnacks[i].sum + 1;
                            return state;
                    }
                }
            }
            state.basketSnacks.push(action.payload);
            return state;
               
        case 'ADD_DESSERTS':
            for(let i = 0; i < state.basketDesserts.length; i++) {
                if(state.basketDesserts[i].name === action.payload.name) {
                    state.basketDesserts[i].sum = state.basketDesserts[i].sum + 1;
                    return state;
                }
            }
            state.basketDesserts.push(action.payload);
            return state;

        case 'ADD_SAUCES':
            for(let i = 0; i < state.basketSauces.length; i++) {
                if(state.basketSauces[i].name === action.payload.name) {
                    state.basketSauces[i].sum = state.basketSauces[i].sum + 1;
                    return state;
                }
            }
            state.basketSauces.push(action.payload);
            return state;

        case 'ADD_BEVERAGES':
            for(let i = 0; i < state.basketBeverages.length; i++) {
                if(state.basketBeverages[i].name === action.payload.name) {
                    if(state.basketBeverages[i].size === action.payload.size) {
                            state.basketBeverages[i].sum = state.basketBeverages[i].sum + 1;
                            return state;
                    }
                }
            }
            state.basketBeverages.push(action.payload);
            return state;

        case 'ADD_JUICES':
            for(let i = 0; i < state.basketJuices.length; i++) {
                if(state.basketJuices[i].name === action.payload.name) {
                    state.basketJuices[i].sum = state.basketJuices[i].sum + 1;
                    return state;
                }
            }
            state.basketJuices.push(action.payload);
            return state;

        case "SEND_ALL": 
        
        return {...state, 
            basketPizza: [],
            basketCombo: [],
            basketSnacks: [],
            basketDesserts: [],
            basketSauces: [],
            basketBeverages: [],
            basketJuices: []
        }

        default:
            return state
    }
}
