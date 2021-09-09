import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//components
import BasketPizza from "./BasketPizza";
import BasketCombo from './BasketCombo';
import BasketSnacks from "./BasketSnacks";
import BasketDesserts from "./BasketDesserts";
import BasketSauces from "./BasketSauces";
import BasketBeverages from './BasketBeverages';
import BasketJuices from './BasketJuices';
import PopUp from './_PopUp';


export default function Basket() {
    const popup = useSelector(state => state.popup.popup);
    const dispatch = useDispatch();
    const basketSum = useSelector(state => state.basketSum.basketSum);
    const togglePopup = () => {
        dispatch({type: "POP_UP"})
    }
    return (
       <div id="basketName">
           {popup && <PopUp />} 
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
                    <button onClick={togglePopup} className="basket_group_btn">Оформить заказ</button>
                </div>
            </div>
            
       </div>
    );
}