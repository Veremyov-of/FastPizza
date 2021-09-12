import { useSelector, useDispatch } from "react-redux";


export default function BasketPizza() {
    const pizza = useSelector(state => state.basket.basketPizza);
    const dispatch = useDispatch();

    const deletePizza  = (index) => {
        const indexItem = index;
        const price = pizza[index].price;
        dispatch({type: "DELETE_PIZZA", payload: indexItem});
        dispatch({type: "PRICE_UPDATA", payload: price})
    }
    
    return (
        <div className="basketPizza">
            {pizza.map((item, index) => (
                <div key={index} className="basketPizza_item">
                    <div className="basketPizza_item_wrapp">
                        <div className="basketPizza_item_wrapp_img"><img src={item.imgUrl} alt="img"/></div>
                        <h3 className="basketPizza_item_wrapp_name">{item.name}</h3>
                        <div className="basketPizza_item_wrapp_size">{item.size ? '40 см' : '30 см'}</div>
                        <div className="basketPizza_item_wrapp_sauce">Соус: {item.sauce}</div>
                        <div className="basketPizza_item_wrapp_number">кол.{item.sum > 1 ? item.sum : 1}</div>
                    </div>
                    <div className="basketPizza_item_funBlock">
                        <div className="basketPizza_item_funBlock_price">{item.size ? item.bigPrice : item.price} руб</div>
                        <button onClick={() => deletePizza(index)} className="basketPizza_item_funBlock_close"><img src="./img/close.png" alt="img"/></button>
                    </div>
                </div>
            ))}
        </div>
    );
}