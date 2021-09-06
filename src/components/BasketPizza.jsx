import { useDispatch, useSelector } from "react-redux";


export default function BasketPizza() {
    const dispatch = useDispatch();
    const pizza = useSelector(state => state.basket.basketPizza);
    return (
        <div className="basketPizza">
            {pizza.map((item, index) => (
                <div key={index} className="basketPizza_item">
                    <div className="basketPizza_item_wrapp">
                        <div className="basketPizza_item_wrapp_img"><img src={item.imgUrl}/></div>
                        <h3 className="basketPizza_item_wrapp_name">{item.name}</h3>
                        <div className="basketPizza_item_wrapp_size">{item.size ? '40 см' : '30 см'}</div>
                        <div className="basketPizza_item_wrapp_sauce">Соус: {item.sauce}</div>
                        {item.sum > 1 ? <div className="basketPizza_item_wrapp_number">кол. {item.sum}</div> : ''}
                    </div>
                    <div className="basketPizza_item_funBlock">
                        <div className="basketPizza_item_funBlock_price">{item.price} руб</div>
                        <div></div>
                        <button className="basketPizza_item_funBlock_close"></button>
                    </div>
                </div>
            ))}
        </div>
    );
}