import { useDispatch, useSelector } from "react-redux";

export default function Snacks() {
    const despatch = useDispatch();
    const desserts = useSelector(state => state.desserts.desserts);
    return (
        <div className="container_desserts section">
            <h2 className="desserts_title">Десерты</h2>
            <div className="desserts_inner">
                {desserts.map((item, index) => (
                    <div key={index} className="desserts">
                        <div className="desserts_img">
                            <img src={item.imgUrl} alt="img-desserts"/>
                        </div>
                        <h3 className="desserts_name">{item.name}</h3>
                        <div className="desserts_composition">{item.composition}</div>
                        <div className="desserts_wrapp">
                            <div className="desserts_wrapp_price">{item.price}</div>
                            <div className="desserts_wrapp_basket">в корзину</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}