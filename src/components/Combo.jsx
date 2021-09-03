import { useDispatch, useSelector } from "react-redux";
//components

export default function Combo() {
    const dispatch = useDispatch()
    const combo = useSelector(state => state.combo.combo);
    const addBasket = (item) => {
        dispatch({type: 'ADD_BASKET', payload: item});
        dispatch({type: 'ADD_BASKET_SUM', payload: item.price})
    }
    return (
        <div id="combo" className="container_combo section">
            <h2 className="title_combo">Комбо</h2>
            <div className="inner_combo">
                {combo.map((item, index) => (
                <div key={index} className="combo">
                    <a className="combo_info" data-title={item.infoHover}>инфо</a>
                    <div className="combo_wrapp">
                        <img className="combo_wrapp_img" src={item.imgUrl} alt="img-pizza"/>
                    </div>
                    <h3 className="combo_name">
                        {item.name}
                    </h3>
                    <div className="combo_composition">
                        {item.composition}
                    </div>
                    <div className="combo_choice">
                        <h3 className="combo_choice_title">Выберите пиццу</h3>
                        <select className="combo_choice_select">
                            <option>Ветчина и грибы</option>
                            <option>Ветчина и грибы</option>
                        </select>
                    </div>
                    <button className="combo_addCheese active_addCheese">
                        <div className="combo_addCheese_plus">
                            <img src="./img/plus.png" alt="img-plus"/>
                        </div>
                        <div className="combo_addCheese_text">Дополнительный сыр</div>
                        <div className="combo_addCheese_price">1.9руб</div>
                    </button>
                    <div className="combo_choice">
                        <div className="combo_choice_title">Выберите два соуса</div>
                        <select className="combo_choice_select select_two">
                            <option>Барбекю</option>
                            <option>Сырный</option>
                        </select>
                        <select className="combo_choice_select">
                            <option>Барбекю</option>
                            <option>Сырный</option>
                        </select>
                    </div>
                    
                    <div className="combo_price">
                        <div className="combo_price_text">{item.price} руб</div>
                        <button onClick={() => addBasket(item)} className="combo_price_addBasket">в корзину</button>
                    </div>
                </div>
                ))}
            </div>
        </div>        
    );
}