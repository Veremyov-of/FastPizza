import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Basket() {

    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.basket);
    const basketSum = useSelector(state => state.basketSum.basketSum)
    return (
        <div className="basket">
            <h2 className="basket_title">Корзина</h2>
            <div className="basket_wrapp">
                {basket.map((item, index) => (
                    <div className="basket_wrapp_item">
                        <div className="basket_wrapp_item_inner">
                            <div className="basket_wrapp_item_inner_img"><img src={item.imgUrl}/></div>
                            <h3 className="basket_wrapp_item_inner_name">{item.name}</h3>
                            <div className="basket_wrapp_item_inner_size">{item.size ? '40 см' : '30 см'}</div>
                        </div>
                        <div className="basket_wrapp_item_funBlock">
                            <div className="basket_wrapp_item_funBlock_price">{item.price} руб</div>
                            <div></div>
                            <button className="basket_wrapp_item_funBlock_close"></button>
                        </div>
                    </div>
                ))}
                <div className="sum">Общая сумма:<span> {basketSum}руб</span></div>
            </div>
            <div className="basket_group">
                <Link className="basket_group_link" to="/">Вернуться в меню</Link>
                <button className="basket_group_btn">Оформить заказ</button>
            </div>
        </div>
    );
}