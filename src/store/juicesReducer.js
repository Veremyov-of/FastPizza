const initialState = {
    juices: [
        {
            name: "Сок рич ананас",
            size: '0.5л',
            price: '11.9руб',
            imgUrl: './img/juices/img1.png'
        },
        {
            name: "Сок рич ананас",
            size: '0.5л',
            price: '11.9руб',
            imgUrl: './img/juices/img1.png'
        },
        {
            name: "Сок рич ананас",
            size: '0.5л',
            price: '11.9руб',
            imgUrl: './img/juices/img1.png'
        },
    ]
}

export const juicesReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}