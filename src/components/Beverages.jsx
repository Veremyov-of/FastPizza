import { useDispatch, useSelector } from "react-redux";

export default function Beverages() {
    const despatch = useDispatch();
    const beverages = useSelector(state => state.beverages.beverages);
    return (
        <div className="container_beverages">
            <h2 className="beverages_title">Напитки</h2>
            <div className="beverages_inner">
                {beverages.map((item, index) => (
                    <div key={index} className="beverages">
                        <div className="beverages_img">
                            <img src={item.imgUrl} alt="img-snacks"/>
                        </div>
                        <h3 className="beverages_name">{item.name}</h3>
                        <div className="beverages_size">
                            <div className="beverages_size_btn active_snacks">0.5л</div>
                            <div className="beverages_size_btn">1л</div>
                        </div>
                        <div className="beverages_wrapp">
                            <div className="beverages_wrapp_price">{item.price}</div>
                            <div className="beverages_wrapp_basket">в корзину</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}