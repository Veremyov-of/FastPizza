import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Basket() {

    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.basket);
    return (
        <div>
            <h2>Корзина</h2>
            <div>
                {basket.map((item, index) => (
                    <div>

                    </div>
                ))}
                <div>Общая сумма:<span></span></div>
            </div>
            <div>
                <Link to="/">Вернуться в меню</Link>
                <button>Оформить заказ</button>
            </div>
        </div>
    );
}