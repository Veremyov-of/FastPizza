const initialState =[
        {
            name: "Куриные наггетсы",
            composition: "Стандартная порция (8-10 шт, 160-170 гр) Большая порция (12-15 шт, 240-255 гр)",
            size: false,
            price: 7.2,
            bigPrice: 15,
            imgUrl: './img/snacks/img1.png'
        },
        {
            name: "Куриные наггетсы",
            composition: "Стандартная порция (8-10 шт, 160-170 гр) Большая порция (12-15 шт, 240-255 гр)",
            size: false,
            price: 8.2,
            bigPrice: 15,
            imgUrl: './img/snacks/img1.png'
        },
        {
            name: "Куриные наггетсы",
            composition: "Стандартная порция (8-10 шт, 160-170 гр) Большая порция (12-15 шт, 240-255 гр)",
            size: false,
            price: 9.2,
            bigPrice: 15,
            imgUrl: './img/snacks/img1.png'
        },
        {
            name: "Куриные наггетсы",
            composition: "Стандартная порция (8-10 шт, 160-170 гр) Большая порция (12-15 шт, 240-255 гр)",
            size: false,
            price: 11.2,
            bigPrice: 15,
            imgUrl: './img/snacks/img1.png'
        },
    ]

export const snacksReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SELECTION_SIZE_SNACKS": {
            const index = action.payload;
            const newState = [...state];
            newState[index] = {...state[index], size: !newState[index].size};
            return newState;
        }
        default:
            return state
    }
}