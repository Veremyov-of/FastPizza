const initialState = [
        {
            name: 'Чизкейк "Нью-Йорк"',
            composition: 'Американский десерт Вес (100 гр)',
            imgUrl: './img/desserts/img1.png',
            price: 3.9,
        },
        {
            name: 'Медовик',
            composition: 'Медовый пирог Вес (120 гр)',
            imgUrl: './img/desserts/img2.png',
            price: 3.9,
        },
        {
            name: 'Чизкейк Шоколадный',
            composition: 'Шоколадный американский десерт Вес (100 гр)',
            imgUrl: './img/desserts/img3.png',
            price: 3.9,
        },
    ]

export const dessertsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}