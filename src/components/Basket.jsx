import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components
import Navbar from "./Navbar";

import BasketPizza from "./BasketPizza";
import BasketCombo from './BasketCombo';
import BasketSnacks from "./BasketSnacks";
import BasketDesserts from "./BasketDesserts";
import BasketSauces from "./BasketSauces";
import BasketBeverages from './BasketBeverages';
import BasketJuices from './BasketJuices';


export default function Basket() {

    const basketSum = useSelector(state => state.basketSum.basketSum)
    return (
       <div id="basketName">
            <Navbar/>
            <div className="basket">
                <h2 className="basket_title">Корзина</h2>
                <BasketPizza />
                <BasketCombo />
                <BasketSnacks />
                <BasketDesserts />
                <BasketSauces />
                <BasketBeverages />
                <BasketJuices />
                <div className="basket_wrapp">
                    <div className="sum">Общая сумма:<span> {basketSum}руб</span></div>
                </div>
                <div className="basket_group">
                    <Link className="basket_group_link" to="/">Вернуться в меню</Link>
                    <button className="basket_group_btn">Оформить заказ</button>
                </div>
            </div>
       </div>
    );
}