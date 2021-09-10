const initialState = {
    basketSum: 0,
    basketGoods: 0,
}

export const basketSumReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BASKET_SUM':
            state = {...state, basketSum: Math.round(state.basketSum + action.payload)}
            state = {...state, basketGoods: state.basketGoods + 1}
            return state;
        case 'CLEAR_SUM': 
            return {...state, 
                basketSum: 0,
                basketGoods: 0,}
        case 'PRICE_UPDATA':
            const prices = state.basketSum - action.payload;
            const goods = state.basketGoods - 1;
            return {...state, basketSum: Math.round(prices), basketGoods: goods}
        default:
            return state
    }
}