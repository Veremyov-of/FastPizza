const initialState = [
        {
            name: 'Комбо S',
            pizzaCombo: 'Ветчина и грибы',
            sauceFirst: 'Барбекю',
            sauceSecond: 'Сырный',
            composition: 'Пицца (30 см) на выбор, наггетсы куриные большая порция (12-15 штук, 240-255 грамм), крылышки куриные большая порция (5-6 штук, 240-255 грамм).',
            addCheese: false,
            sum: 1,
            imgUrl: './img/combo/img1.png',
            price: 29.9,
            infoHover: `Вес 1400±50 грамм`
        },
        {
            name: 'Комбо M',
            pizzaCombo: 'Ветчина и грибы',
            sauceFirst: 'Барбекю',
            sauceSecond: 'Сырный',
            composition: 'Пицца (40 см) на выбор, наггетсы куриные большая порция (12-15 штук, 240-255 грамм), крылышки куриные большая порция (5-6 штук, 240-255 грамм).',
            addCheese: false,
            sum: 1,
            imgUrl: './img/combo/img1.png',
            price: 30.9,
            infoHover: `Вес 1400±50 грамм`
        },
        {
            name: 'Комбо L',
            pizzaCombo: 'Ветчина и грибы',
            sauceFirst: 'Барбекю',
            sauceSecond: 'Сырный',
            composition: 'Пицца (40 см) на выбор, наггетсы куриные большая порция (12-15 штук, 240-255 грамм), крылышки куриные большая порция (5-6 штук, 240-255 грамм).',
            addCheese: false,
            sum: 1,
            imgUrl: './img/combo/img1.png',
            price: 31.9,
            infoHover: `Вес 1400±50 грамм`
        },
        {
            name: 'Комбо XL',
            pizzaCombo: 'Ветчина и грибы',
            sauceFirst: 'Барбекю',
            sauceSecond: 'Сырный',
            composition: 'Пицца (40 см) на выбор, наггетсы куриные большая порция (12-15 штук, 240-255 грамм), крылышки куриные большая порция (5-6 штук, 240-255 грамм).',
            addCheese: false,
            sum: 1,
            imgUrl: './img/combo/img1.png',
            price: 32.9,
            infoHover: `Вес 1400±50 грамм`
        },
]

export const comboReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CHEESE_COMBO': {
            const index = action.payload;
            const newState = [...state];
            newState[index] = {...state[index], addCheese: !newState[index].addCheese};
            return newState;
        }
        case "CHOICE_OF_SAUCE_COMBO_FIRST": {
            const index = action.payload;
            const newState = [...state];
            newState[index] = {...state[index], sauceFirst: action.newSauce};
            return newState;
        }
        case "CHOICE_OF_SAUCE_COMBO_SECOND": {
            const index = action.payload;
            const newState = [...state];
            newState[index] = {...state[index], sauceSecond: action.newSauce};
            return newState;
        }
        case "CHOICE_OF_PIZZA": {
            const index = action.payload;
            const newState = [...state];
            newState[index] = {...state[index], pizzaCombo: action.newSauce};
            return newState;
        }
        default:
            return state
    }
}