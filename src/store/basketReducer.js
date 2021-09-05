const initialState = {
    basketPizza: [],
    basketCombo: [],
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
                    if(!state.basketPizza[i].size === action.payload.size) {
                        state.basketPizza[i].sum = state.basketPizza[i].sum + 1;
                        return state;
                    }
                    return state;
                }
            }
            state.basketPizza.push(action.payload);
            return state;
            

            case 'ADD_COMBO':
            state.basketCombo.push(action.payload);
            return state;


        default:
            return state
    }
}