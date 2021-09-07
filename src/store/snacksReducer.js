const initialState =[
        {
            name: "Куриные наггетсы",
            sum: 1,
            composition: "Стандартная порция (8-10 шт, 160-170 гр) Большая порция (12-15 шт, 240-255 гр)",
            size: false,
            price: 6.2,
            bigPrice: 9.9,
            imgUrl: './img/snacks/img1.png'
        },
        {
            name: "Куриные крылышки",
            sum: 1,
            composition: "Стандартная порция (8-10 шт, 160-170 гр) Большая порция (12-15 шт, 240-255 гр)",
            size: false,
            price: 7.9,
            bigPrice: 10.9,
            imgUrl: './img/snacks/img2.png'
        },
        {
            name: "Картофельные оладьи",
            sum: 1,
            composition: "Стандартная порция (8-10 шт, 160-170 гр) Большая порция (12-15 шт, 240-255 гр)",
            size: false,
            price: 4.9,
            bigPrice: 7.9,
            imgUrl: './img/snacks/img3.png'
        },
        {
            name: "Картофель фри",
            sum: 1,
            composition: "Стандартная порция (8-10 шт, 160-170 гр) Большая порция (12-15 шт, 240-255 гр)",
            size: false,
            price: 3.9,
            bigPrice: 4.9,
            imgUrl: './img/snacks/img4.png'
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