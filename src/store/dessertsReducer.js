const initialState = {
    desserts: [
        {
            name: 'Чизкейк "Нью-Йорк"',
            composition: 'Американский десерт Вес (100 гр)',
            imgUrl: './img/desserts/img1.png',
            price: '11.9 руб',
        },
        {
            name: 'Чизкейк "Нью-Йорк"',
            composition: 'Американский десерт Вес (100 гр)',
            imgUrl: './img/desserts/img1.png',
            price: '11.9 руб',
        },
        {
            name: 'Чизкейк "Нью-Йорк"',
            composition: 'Американский десерт Вес (100 гр)',
            imgUrl: './img/desserts/img1.png',
            price: '11.9 руб',
        },
    ]
}

export const dessertsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}