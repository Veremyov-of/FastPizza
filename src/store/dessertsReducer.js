const initialState = [
        {
            name: 'Чизкейк "Нью-Йорк"',
            composition: 'Американский десерт Вес (100 гр)',
            imgUrl: './img/desserts/img1.png',
            price: 12.3,
        },
        {
            name: 'Чизкейк "Нью-Йорк"',
            composition: 'Американский десерт Вес (100 гр)',
            imgUrl: './img/desserts/img1.png',
            price: 12.3,
        },
        {
            name: 'Чизкейк "Нью-Йорк"',
            composition: 'Американский десерт Вес (100 гр)',
            imgUrl: './img/desserts/img1.png',
            price: 12.3,
        },
    ]

export const dessertsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}