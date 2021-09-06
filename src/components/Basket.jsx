import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components
import BasketPizza from "./BasketPizza";

export default function Basket() {

    const dispatch = useDispatch();
    const basketSum = useSelector(state => state.basketSum.basketSum)
    return (
        <div className="basket">
            <h2 className="basket_title">Корзина</h2>
            <div className="basket_wrapp">
                <BasketPizza />
                <div className="sum">Общая сумма:<span> {basketSum}руб</span></div>
            </div>
            <div className="basket_group">
                <Link className="basket_group_link" to="/">Вернуться в меню</Link>
                <button className="basket_group_btn">Оформить заказ</button>
            </div>
        </div>
    );
}