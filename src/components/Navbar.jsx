import { useSelector } from "react-redux";
import { useState } from "react";

import { Link } from "react-router-dom";
export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const basketSum = useSelector(state => state.basketSum.basketSum);
    const goodsSum = useSelector(state => state.basketSum.basketGoods);

    const menuToggle = () => {
        const newState = !menu;
        setMenu(newState);
    }
    return (
        <div className="navbar_wrapp">
            <div className="navbar container">
            <div className={`navbar_nav ${ menu ? 'navbar_nav_active' : ''}`}>
                <a onClick={menuToggle} href="/#pizza" className="navbar_nav_link">Пиццы</a>
                <a onClick={menuToggle} href="/#combo" className="navbar_nav_link">Комбо</a>
                <a onClick={menuToggle} href="/#snacks" className="navbar_nav_link">Закуски</a>
                <a onClick={menuToggle} href="/#beverages" className="navbar_nav_link">Напитки</a>
                <Link onClick={menuToggle} to="/stock" className="navbar_nav_link">Акции</Link>
                <a onClick={menuToggle} href="/" className="navbar_nav_link">Доставка</a>
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
            <button onClick={menuToggle} className="menu">
                <span className={`menu_line ${menu ? 'line_active': ''}`}></span>
                <span className={`menu_line ${menu ? 'line_active': ''}`}></span>
                <span className={`menu_line ${menu ? 'line_active': ''}`}></span>
            </button>
        </div>
        </div>
    );
}