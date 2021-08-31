const initialState = {
    beverages: [
        {
            name: "Coca-cola",
            size: '0.5л',
            price: '11.9руб',
            imgUrl: './img/beverages/img1.png'
        },
        {
            name: "Coca-cola",
            size: '0.5л',
            price: '11.9руб',
            imgUrl: './img/beverages/img1.png'
        },
        {
            name: "Coca-cola",
            size: '0.5л',
            price: '11.9руб',
            imgUrl: './img/beverages/img1.png'
        },
    ]
}

export const beveragesReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}