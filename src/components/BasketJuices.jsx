import { useSelector, useDispatch } from "react-redux";


export default function BasketJuices() {
    const juices = useSelector(state => state.basket.basketJuices);
    const dispatch = useDispatch();

    const deleteJuices  = (index) => {
        const indexItem = index;
        const price = juices[index].price;
        dispatch({type: "DELETE_JUICES", payload: indexItem});
        dispatch({type: "PRICE_UPDATA", payload: price})
    }
    return (
        <div className="basketPizza">
            {juices.map((item, index) => (
                <div key={index} className="basketPizza_item">
                    <div className="basketPizza_item_wrapp">
                        <div className="basketPizza_item_wrapp_img"><img src={item.imgUrl} alt="img"/></div>
                        <h3 className="basketPizza_item_wrapp_name">{item.name}</h3>
                        <div className="basketPizza_item_wrapp_number">кол.{item.sum > 1 ? item.sum : 1}</div>
                    </div>
                    <div className="basketPizza_item_funBlock">
                        <div className="basketPizza_item_funBlock_price">{item.price} руб</div>
                        <button onClick={() => deleteJuices(index)} className="basketPizza_item_funBlock_close"><img src="./img/close.png" alt="img"/></button>
                    </div>
                </div>
            ))}
        </div>
    );
}