import { useSelector, useDispatch } from "react-redux";


export default function BasketSnacks() {
    const snacks = useSelector(state => state.basket.basketSnacks);
    const dispatch = useDispatch();

    const deleteSnacks  = (index) => {
        const indexItem = index;
        const price = snacks[index].price;
        dispatch({type: "DELETE_SNACKS", payload: indexItem});
        dispatch({type: "PRICE_UPDATA", payload: price})
    }
    return (
        <div className="basketPizza">
            {snacks.map((item, index) => (
                <div key={index} className="basketPizza_item">
                    <div className="basketPizza_item_wrapp">
                        <div className="basketPizza_item_wrapp_img"><img src={item.imgUrl} alt="img"/></div>
                        <h3 className="basketPizza_item_wrapp_name">{item.name}</h3>
                        <div className="basketPizza_item_wrapp_size">{item.size ? 'Большая' : 'Стандартная'}</div>
                        <div className="basketPizza_item_wrapp_number">кол.{item.sum > 1 ? item.sum : 1}</div>
                    </div>
                    <div className="basketPizza_item_funBlock">
                        <div className="basketPizza_item_funBlock_price">{item.size ? item.bigPrice : item.price} руб</div>
                        <button onClick={() => deleteSnacks(index)} className="basketPizza_item_funBlock_close"><img src="./img/close.png" alt="img"/></button>
                    </div>
                </div>
            ))}
        </div>
    );
}