import { useDispatch, useSelector } from "react-redux";
//components

export default function Home() {
    const despatch = useDispatch()
    const pizza = useSelector(state => state.pizza.pizza);
    return (
        <div className="container_pizza section">
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
                        <button className="pizza_size_text active_size">30 см</button>
                        <button className="pizza_size_text">40 см</button>
                    </div>
                    <button className="pizza_addCheese">
                        <div className="pizza_addCheese_plus">
                            <img src="./img/plus.png" alt="img-plus"/>
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
                        <div className="pizza_price_text">{item.price}</div>
                        <button className="pizza_price_addBasket">в корзину</button>
                    </div>
                </div>
                ))}
            </div>
        </div>        
    );
}