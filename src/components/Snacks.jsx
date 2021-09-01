import { useDispatch, useSelector } from "react-redux";

export default function Snacks() {
    const despatch = useDispatch();
    const snacks = useSelector(state => state.snacks.snacks);
    return (
        <div className="container_snacks section">
            <h2 className="snacks_title">Закуски</h2>
            <div className="snacks_inner">
                {snacks.map((item, index) => (
                    <div key={index} className="snacks">
                        <div className="snacks_img">
                            <img src={item.imgUrl} alt="img-snacks"/>
                        </div>
                        <h3 className="snacks_name">{item.name}</h3>
                        <div className="snacks_composition">{item.composition}</div>
                        <div className="snacks_size">
                            <div className="snacks_size_btn active_snacks">Стандартная</div>
                            <div className="snacks_size_btn">Большая</div>
                        </div>
                        <div className="snacks_wrapp">
                            <div className="snacks_wrapp_price">{item.price}</div>
                            <div className="snacks_wrapp_basket">в корзину</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}