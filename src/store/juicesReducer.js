const initialState = [
        {
            name: "Сок рич ананас",
            sum: 1,
            size: true,
            price: 3,
            imgUrl: './img/juices/img1.png'
        },
        {
            name: "Сок рич ананас",
            sum: 1,
            size: true,
            price: 3,
            imgUrl: './img/juices/img1.png'
        },
        {
            name: "Сок рич ананас",
            sum: 1,
            size: true,
            price: 3,
            imgUrl: './img/juices/img1.png'
        },
    ]

export const juicesReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}