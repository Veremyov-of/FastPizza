const initialState = [
        {
            name: 'Томатный кетчуп',
            sum: 1,
            imgUrl: './img/sauces/img1.png',
            price: 0.6,
        },
        {
            name: 'Сырный соус',
            sum: 1,
            imgUrl: './img/sauces/img1.png',
            price: 0.6,
        },
        {
            name: 'Томатный кетчуп',
            sum: 1,
            imgUrl: './img/sauces/img1.png',
            price: 0.6,
        },
    ]

export const saucesReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}