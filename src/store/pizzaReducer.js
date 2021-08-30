const initialState = {
    pizza: [
        {
            name: 'Пицца Маргарита',
            composition: 'Основа: Томатный соус Состав: Сыр моцарелла, томаты.',
            size: 30,
            addCheese: false,
            imgUrl: './img/pizza/img1.png',
            price: '11.9 руб'
        },
        {
            name: 'Пицца Маргарита',
            composition: 'Основа: Томатный соус Состав: Сыр моцарелла, томаты.',
            size: 30,
            addCheese: false,
            imgUrl: './img/pizza/img1.png',
            price: '11.9 руб'
        },
        {
            name: 'Пицца Маргарита',
            composition: 'Основа: Томатный соус Состав: Сыр моцарелла, томаты.',
            size: 30,
            addCheese: false,
            imgUrl: './img/pizza/img1.png',
            price: '11.9 руб'
        },
        {
            name: 'Пицца Маргарита',
            composition: 'Основа: Томатный соус Состав: Сыр моцарелла, томаты.',
            size: 30,
            addCheese: false,
            imgUrl: './img/pizza/img1.png',
            price: '11.9 руб'
        },
    ]
}

export const pizzaReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}