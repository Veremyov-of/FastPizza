import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
export default function Navbar() {
    const basketSum = useSelector(state => state.basketSum.basketSum);
    const goodsSum = useSelector(state => state.basketSum.basketGoods)
    return (
        <div className="navbar_wrapp">
            <div className="navbar container">
            <div className="navbar_nav">
                <a href="/#pizza" className="navbar_nav_link">Пиццы</a>
                <a href="/#combo" className="navbar_nav_link">Комбо</a>
                <a href="/#snacks" className="navbar_nav_link">Закуски</a>
                <a href="/#beverages" className="navbar_nav_link">Напитки</a>
                <Link to="/stock" className="navbar_nav_link">Акции</Link>
                <a href="/" className="navbar_nav_link">Доставка</a>
            </div>
            <div className="navbar_container">
                <button className="navbar_container_support">Служба поддержки</button>
                <div className="navbar_container_inner">
                    <div className="navbar_container_inner_shopCard">
                        <div className="navbar_container_inner_shopCard_price">{basketSum}<span> руб</span></div>
                        <div className="navbar_container_inner_shopCard_product">{goodsSum}<span> товар</span></div>
                    </div>
                    <Link to="/basket" className="navbar_container_inner_basket"><img src="./img/basket.png" alt="basket"/></Link>
                </div>
            </div>
        </div>
        </div>
    );
}