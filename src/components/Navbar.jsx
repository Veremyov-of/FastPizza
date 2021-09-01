import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="navbar container">
            <div className="navbar_nav">
                <a href="#pizza" className="navbar_nav_link">Пиццы</a>
                <a href="#combo" className="navbar_nav_link">Комбо</a>
                <a href="#snacks" className="navbar_nav_link">Закуски</a>
                <a href="#beverages" className="navbar_nav_link">Напитки</a>
                <Link to="/stock" className="navbar_nav_link">Акции</Link>
                <a href="/" className="navbar_nav_link">Доставка</a>
            </div>
            <div className="navbar_container">
                <button className="navbar_container_support">Служба поддержки</button>
                <div className="navbar_container_inner">
                    <div className="navbar_container_inner_shopCard">
                        <div className="navbar_container_inner_shopCard_price">0<span> руб</span></div>
                        <div className="navbar_container_inner_shopCard_product">0<span> товар</span></div>
                    </div>
                    <a href="/" className="navbar_container_inner_basket"><img src="./img/basket.png" alt="basket"/></a>
                </div>
            </div>
        </div>
    );
}