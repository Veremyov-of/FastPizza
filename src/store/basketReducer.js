const initialState = {
    basket: []
}

export const basketReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BASKET':
            for(let i = 0; i < state.basket.length; i++) {
                if(state.basket[i].name === action.payload.name) {
                    state.basket[i].sum += 1;
                    return state
                }
            }
            state.basket.push(action.payload);
            return state;
        default:
            return state
    }
}