const initialState = [
        {
            name: 'Пицца Маргарита',
            sum : 1,
            composition: 'Основа: Томатный соус Состав: Сыр моцарелла, томаты.',
            size: false,
            addCheese: false,
            imgUrl: './img/pizza/img1.png',
            price: 11.9,
            infoHover: `Пищевая ценность продукта на 100 г:
                Энергетическая ценность 202,2 ккал
                Углеводы 26,5 г
                Белки 8,8 г
                Жиры 6,5 г
                
                Диаметр 30 см
                Вес 590±50 г
                Диаметр 40 см
                Вес 1110±100 г`
        },
        {
            name: 'Пицца Маргарита',
            sum : 1,
            composition: 'Основа: Томатный соус Состав: Сыр моцарелла, томаты.',
            size: false,
            addCheese: false,
            imgUrl: './img/pizza/img1.png',
            price: 20.9,
            infoHover: `Пищевая ценность продукта на 100 г:
                Энергетическая ценность 202,2 ккал
                Углеводы 26,5 г
                Белки 8,8 г
                Жиры 6,5 г
                
                Диаметр 30 см
                Вес 590±50 г
                Диаметр 40 см
                Вес 1110±100 г`
        },
        {
            name: 'Пицца Маргарита',
            sum : 1,
            composition: 'Основа: Томатный соус Состав: Сыр моцарелла, томаты.',
            size: false,
            addCheese: false,
            imgUrl: './img/pizza/img1.png',
            price: 30.1,
            infoHover: `Пищевая ценность продукта на 100 г:
                Энергетическая ценность 202,2 ккал
                Углеводы 26,5 г
                Белки 8,8 г
                Жиры 6,5 г
                
                Диаметр 30 см
                Вес 590±50 г
                Диаметр 40 см
                Вес 1110±100 г`
        },
        {
            name: 'Пицца Маргарита',
            sum : 1,
            composition: 'Основа: Томатный соус Состав: Сыр моцарелла, томаты.',
            size: false,
            addCheese: false,
            imgUrl: './img/pizza/img1.png',
            price: 30.1,
            infoHover: `Пищевая ценность продукта на 100 г:
                Энергетическая ценность 202,2 ккал
                Углеводы 26,5 г
                Белки 8,8 г
                Жиры 6,5 г
                
                Диаметр 30 см
                Вес 590±50 г
                Диаметр 40 см
                Вес 1110±100 г`
        },
]



export const pizzaReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CHEESE': {
            const index = action.payload;
            const newState = [...state];
            newState[index] = {...state[index], addCheese: !newState[index].addCheese};
            return newState;
        }

        case "SELECTION_SIZE": {
            const index = action.payload;
            const newState = [...state];
            newState[index] = {...state[index], size: !newState[index].size};
            return newState;
        }

        default:
            return state;
    }
}