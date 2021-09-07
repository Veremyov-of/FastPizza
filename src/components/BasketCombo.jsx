import { useSelector } from "react-redux";


export default function BasketPizza() {
    const combo = useSelector(state => state.basket.basketCombo);
    return (
        <div className="basketPizza">
            {combo.map((item, index) => (
                <div key={index} className="basketPizza_item">
                    <div className="basketPizza_item_wrapp">
                        <div className="basketPizza_item_wrapp_img"><img src={item.imgUrl} alt="img"/></div>
                        <h3 className="basketPizza_item_wrapp_name">{item.name}</h3>
                        <div>{item.pizzaCombo}</div>
                        <div className="basketPizza_item_wrapp_number">кол.{item.sum > 1 ? item.sum : 1}</div>
                        <div className="basketPizza_item_wrapp_sauce">Соус: {item.sauceFirst}, {item.sauceSecond}</div>
                    </div>
                    <div className="basketPizza_item_funBlock">
                        <div className="basketPizza_item_funBlock_price">{item.price} руб</div>
                        <button className="basketPizza_item_funBlock_close"></button>
                    </div>
                </div>
            ))}
        </div>
    );
}