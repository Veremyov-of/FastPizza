import { useDispatch, useSelector } from "react-redux";

export default function Sauces() {
    const despatch = useDispatch();
    const sauces = useSelector(state => state.sauces.sauces);
    return (
        <div className="container_sauces">
            <h2 className="sauces_title">Соусы</h2>
            <div className="sauces_inner">
                {sauces.map((item, index) => (
                    <div key={index} className="sauces">
                        <div className="sauces_img">
                            <img src={item.imgUrl} alt="img-sauces"/>
                        </div>
                        <h3 className="sauces_name">{item.name}</h3>
                        <div className="sauces_wrapp">
                            <div className="sauces_wrapp_price">{item.price}</div>
                            <div className="sauces_wrapp_basket">в корзину</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}