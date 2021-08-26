//img
import basket from "../img/basket.png";

export default function Navbar() {
    return (
        <div className="navbar container">
            <div className="navbar_nav">
                <a href="#" className="navbar_nav_link">Пиццы</a>
                <a href="#" className="navbar_nav_link">Комбо</a>
                <a href="#" className="navbar_nav_link">Закуски</a>
                <a href="#" className="navbar_nav_link">Напитки</a>
                <a href="#" className="navbar_nav_link">Акции</a>
                <a href="#" className="navbar_nav_link">Доставка</a>
            </div>
            <div className="navbar_container">
                <button className="navbar_container_support">Служба поддержки</button>
                <div className="navbar_container_inner">
                    <div className="navbar_container_inner_shopCard">
                        <div className="navbar_container_inner_shopCard_price">0<span>руб</span></div>
                        <div className="navbar_container_inner_shopCard_product">0<span>товар</span></div>
                    </div>
                    <a className="navbar_container_inner_basket"><img src={basket} alt="basket"/></a>
                </div>
            </div>
        </div>
    );
}