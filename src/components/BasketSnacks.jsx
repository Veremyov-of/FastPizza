import { useSelector } from "react-redux";


export default function BasketSnacks() {
    const snacks = useSelector(state => state.basket.basketSnacks);
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
                        <div className="basketPizza_item_funBlock_price">{item.price} руб</div>
                        <button className="basketPizza_item_funBlock_close"></button>
                    </div>
                </div>
            ))}
        </div>
    );
}