const initialState = {
    sauces: [
        {
            name: 'Томатный кетчуп',
            imgUrl: './img/sauces/img1.png',
            price: '0.60 руб',
        },
        {
            name: 'Томатный кетчуп',
            imgUrl: './img/sauces/img1.png',
            price: '0.60 руб',
        },
        {
            name: 'Томатный кетчуп',
            imgUrl: './img/sauces/img1.png',
            price: '0.60 руб',
        },
    ]
}

export const saucesReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}