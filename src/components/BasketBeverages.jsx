import { useSelector, useDispatch } from "react-redux";


export default function BasketBeverages() {
    const beverages = useSelector(state => state.basket.basketBeverages);
    const dispatch = useDispatch();

    const deleteBeverages  = (index) => {
        const indexItem = index;
        const price = beverages[index].price;
        dispatch({type: "DELETE_BEVERAGES", payload: indexItem});
        dispatch({type: "PRICE_UPDATA", payload: price})
    }
    return (
        <div className="basketPizza">
            {beverages.map((item, index) => (
                <div key={index} className="basketPizza_item">
                    <div className="basketPizza_item_wrapp">
                        <div className="basketPizza_item_wrapp_img"><img src={item.imgUrl} alt="img"/></div>
                        <h3 className="basketPizza_item_wrapp_name">{item.name}</h3>
                        <div className="basketPizza_item_wrapp_size">{item.size ? '1 л' : '0.5 л'}</div>
                        <div className="basketPizza_item_wrapp_number">кол.{item.sum > 1 ? item.sum : 1}</div>
                    </div>
                    <div className="basketPizza_item_funBlock">
                        <div className="basketPizza_item_funBlock_price">{item.price} руб</div>
                        <button onClick={() => deleteBeverages(index)} className="basketPizza_item_funBlock_close"><img src="./img/close.png" alt="img"/></button>
                    </div>
                </div>
            ))}
        </div>
    );
}