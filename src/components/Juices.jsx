import { useDispatch, useSelector } from "react-redux";

export default function Juices() {
    const despatch = useDispatch();
    const juices = useSelector(state => state.juices.juices);
    return (
        <div className="container_juices">
            <h2 className="juices_title">Соки</h2>
            <div className="juices_inner">
                {juices.map((item, index) => (
                    <div key={index} className="juices">
                        <div className="juices_img">
                            <img src={item.imgUrl} alt="img-juices"/>
                        </div>
                        <h3 className="juices_name">{item.name}</h3>
                        <div className="juices_size">1л</div>
                        <div className="juices_wrapp">
                            <div className="juices_wrapp_price">{item.price}</div>
                            <div className="juices_wrapp_basket">в корзину</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}