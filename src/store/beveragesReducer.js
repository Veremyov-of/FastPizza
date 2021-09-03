const initialState = [
        {
            name: "Coca-cola",
            size: false,
            price: 2,
            imgUrl: './img/beverages/img1.png'
        },
        {
            name: "Coca-cola",
            size: false,
            price: 2,
            imgUrl: './img/beverages/img1.png'
        },
        {
            name: "Coca-cola",
            size: false,
            price: 2,
            imgUrl: './img/beverages/img1.png'
        },
    ]


export const beveragesReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SELECTION_SIZE_BEVERAGES": {
            const index = action.payload;
            const newState = [...state];
            newState[index] = {...state[index], size: !newState[index].size};
            return newState;
        }
        default:
            return state
    }
}