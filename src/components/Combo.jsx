import { useDispatch, useSelector } from "react-redux";
//components

export default function Combo() {
    const dispatch = useDispatch()
    const combo = useSelector(state => state.combo);
    const addBasket = (item) => {
        const newItem = {...item};
        dispatch({type: 'ADD_COMBO', payload: newItem});
        dispatch({type: 'ADD_BASKET_SUM', payload: item.price})
    }
    const addCheese = (item) => {
        const indexItem = combo.indexOf(item);
        dispatch({type: 'ADD_CHEESE_COMBO', payload: indexItem});
    }

    const choiceOfSauceFirst = (item,event) => {
        const modifiedSauce = event.target.value;
        const indexItem = combo.indexOf(item);
        dispatch({type: 'CHOICE_OF_SAUCE_COMBO_FIRST', payload: indexItem, newSauce: modifiedSauce});
    }
    const choiceOfSauceSecond = (item, event) => {
        const modifiedSauce = event.target.value;
        const indexItem = combo.indexOf(item);
        dispatch({type: 'CHOICE_OF_SAUCE_COMBO_SECOND', payload: indexItem, newSauce: modifiedSauce});
    }
    const choiceOfPizza = (item, event) => {
        const modifiedSauce = event.target.value;
        const indexItem = combo.indexOf(item);
        dispatch({type: 'CHOICE_OF_PIZZA', payload: indexItem, newSauce: modifiedSauce});
    }
    return (
        <div id="combo" className="container_combo section">
            <h2 className="title_combo">Комбо</h2>
            <div className="inner_combo">
                {combo.map((item, index) => (
                <div key={index} className="combo">
                    <a href="/" className="combo_info" data-title={item.infoHover}>инфо</a>
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
                        <select value={item.pizzaCombo} onChange={(e) => choiceOfPizza(item, e)} className="combo_choice_select">
                            <option value="Ветчина и грибы">Ветчина и грибы</option>
                            <option value="Пицца Маргарита">Пицца Маргарита</option>
                        </select>
                    </div>
                    <button onClick={() => addCheese(item)} className={`combo_addCheese ${item.addCheese ? 'active_addCheese': ''}`}>
                        <div className="combo_addCheese_plus">
                            <img  src={`${item.addCheese ? './img/checkMark.png': './img/plus.png'}`} alt="img-plus"/>
                        </div>
                        <div className="combo_addCheese_text">Дополнительный сыр</div>
                        <div className="combo_addCheese_price">1.9руб</div>
                    </button>
                    <div className="combo_choice">
                        <div className="combo_choice_title">Выберите два соуса</div>
                        <select value={item.sauceFirst} onChange={(e) => choiceOfSauceFirst(item, e)} className="combo_choice_select select_two">
                            <option value="Барбекю">Барбекю</option>
                            <option value="Сырный">Сырный</option>
                            <option value="Кетчуп">Кетчуп</option>
                        </select>
                        <select value={item.sauceSecond} onChange={(e) => choiceOfSauceSecond(item, e)} className="combo_choice_select">
                            <option value="Барбекю">Барбекю</option>
                            <option value="Сырный">Сырный</option>
                            <option value="Кетчуп">Кетчуп</option>
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