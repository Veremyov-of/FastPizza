const initialState = {
    snacks: [
        {
            name: "Куриные наггетсы",
            composition: "Стандартная порция (8-10 шт, 160-170 гр) Большая порция (12-15 шт, 240-255 гр)",
            size: 'standard',
            price: '1.90руб',
            imgUrl: './img/snacks/img1.png'
        },
        {
            name: "Куриные наггетсы",
            composition: "Стандартная порция (8-10 шт, 160-170 гр) Большая порция (12-15 шт, 240-255 гр)",
            size: 'standard',
            price: '1.90руб',
            imgUrl: './img/snacks/img1.png'
        },
        {
            name: "Куриные наггетсы",
            composition: "Стандартная порция (8-10 шт, 160-170 гр) Большая порция (12-15 шт, 240-255 гр)",
            size: 'standard',
            price: '1.90руб',
            imgUrl: './img/snacks/img1.png'
        },
        {
            name: "Куриные наггетсы",
            composition: "Стандартная порция (8-10 шт, 160-170 гр) Большая порция (12-15 шт, 240-255 гр)",
            size: 'standard',
            price: '1.90руб',
            imgUrl: './img/snacks/img1.png'
        },
    ]
}

export const snacksReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}