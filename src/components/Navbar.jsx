import { useSelector } from "react-redux";
import { useState } from "react";

import { HashLink as Link } from 'react-router-hash-link';


export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const basketSum = useSelector(state => state.basketSum.basketSum);
    const goodsSum = useSelector(state => state.basketSum.basketGoods);

    const menuToggle = () => {
        const newState = !menu;
        if(newState) {
            document.body.style.overflow = "hidden";
            console.log('ok')
        } else {
            document.body.style.overflow = "visible";
            console.log('no ok')
        }
        setMenu(newState);
    }
    return (
        <div className="navbar_wrapp">
            <div className="navbar container">
            <div className={`navbar_nav ${ menu ? 'navbar_nav_active' : ''}`}>
                <Link  smooth onClick={menuToggle} to="/#pizza" className="navbar_nav_link">Пиццы</Link>
                <Link  smooth onClick={menuToggle} to="/#combo" className="navbar_nav_link">Комбо</Link>
                <Link  smooth onClick={menuToggle} to="/#snacks" className="navbar_nav_link">Закуски</Link>
                <Link  smooth onClick={menuToggle} to="/#beverages" className="navbar_nav_link">Напитки</Link>
                <Link  smooth onClick={menuToggle} to="/stock" className="navbar_nav_link">Акции</Link>
                <Link  smooth onClick={menuToggle} to="/delivery#deliveryid" className="navbar_nav_link">Доставка</Link>
            </div>
            <div className="navbar_container">
                <button className="navbar_container_support">Служба поддержки</button>
                <div className="navbar_container_inner">
                    <div className="navbar_container_inner_shopCard">
                        <div className="navbar_container_inner_shopCard_price">{basketSum}<span> руб</span></div>
                        <div className="navbar_container_inner_shopCard_product">{goodsSum}<span> товар</span></div>
                    </div>
                    <Link to="/basket#basketName" className="navbar_container_inner_basket"><img src="./img/basket.png" alt="basket"/></Link>
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