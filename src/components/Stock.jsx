import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Stock() {
    const dispatch = useDispatch();
    const stock = useSelector(state => state.stock.stock);
    return (
        <div className="stock container">
            <h2 className="stock_title">Акции на доставку пиццы</h2>
            <div className="stock_wrapp">
            {stock.map((item, index) => (
                <div key={index} className="stock_wrapp_item">
                        <div className="stock_wrapp_item_img"><img src={item.imgUrl} alt="img"/></div>
                        <h3 className="stock_wrapp_item_title">{item.name}</h3>
                        <div className="stock_wrapp_item_text">
                            {item.text}
                        </div>
                </div>
            ))}
            </div>
            <div className="stock_inner">
                <Link className="stock_inner_link" to="/">Главная</Link>
                /Акции
            </div>
        </div>
    );
}