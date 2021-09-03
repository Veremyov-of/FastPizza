import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const dispatch = useDispatch()
    const pizza = useSelector(state => state.pizza);
    const addBasket = (item) => {
        dispatch({type: 'ADD_BASKET', payload: item});
        dispatch({type: 'ADD_BASKET_SUM', payload: item.price})
    }
    const selectionSize = (item) => {
        const indexItem = pizza.indexOf(item);
        dispatch({type: 'SELECTION_SIZE', payload: indexItem});
    }

    const addCheese = (item) => {
        const indexItem = pizza.indexOf(item);
        dispatch({type: 'ADD_CHEESE', payload: indexItem});
    }


    return (
        <div id="pizza" className="container_pizza section">
            <h2 className="title_pizza">Пиццы</h2>
            <div className="inner_pizza">
                {pizza.map((item, index) => (
                <div key={index} className="pizza">
                    <a className="pizza_info" data-title={item.infoHover}>инфо</a>
                    <div className="pizza_wrapp">
                        <img className="pizza_wrapp_img" src={item.imgUrl} alt="img-pizza"/>
                    </div>
                    <h3 className="pizza_name">
                        {item.name}
                    </h3>
                    <div className="pizza_composition">
                        {item.composition}
                    </div>
                    <div className="pizza_size">
                        <button onClick={() => selectionSize(item)} className={`pizza_size_text ${item.size ? '' : "active_size"}`}>30 см</button>
                        <button onClick={() => selectionSize(item)} className={`pizza_size_text ${item.size ? "active_size" : ''}`}>40 см</button>
                    </div>
                    <button onClick={() => addCheese(item)} className={`pizza_addCheese ${item.addCheese ? 'active_addCheese': ''}`}>
                        <div className="pizza_addCheese_plus">
                            <img src={`${item.addCheese ? './img/checkMark.png': './img/plus.png'}`} alt="img-plus"/>
                        </div>
                        <div className="pizza_addCheese_text">Дополнительный сыр</div>
                        <div className="pizza_addCheese_price">1.9руб</div>
                    </button>
                    <div className="pizza_choice">
                        <div className="pizza_choice_title">Выберите бесплатный соус</div>
                        <select className="pizza_choice_select">
                            <option>Барбекю</option>
                            <option>Сырный</option>
                        </select>
                    </div>
                    <div className="pizza_price">
                        <div className="pizza_price_text">{item.price} руб</div>
                        <button onClick={() => addBasket(item)} className="pizza_price_addBasket">в корзину</button>
                    </div>
                </div>
                ))}
            </div>
        </div>        
    );
}