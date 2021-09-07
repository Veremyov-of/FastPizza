import { useDispatch, useSelector } from "react-redux";

export default function Juices() {
    const dispatch = useDispatch();
    const juices = useSelector(state => state.juices);
    const addBasket = (item) => {
        const newItem = {...item}
        dispatch({type: 'ADD_JUICES', payload: newItem});
        dispatch({type: 'ADD_BASKET_SUM', payload: item.price})
    }
    return (
        <div className="container_juices section">
            <h2 className="juices_title">Соки</h2>
            <div className="juices_inner">
                {juices.map((item, index) => (
                    <div key={index} className="juices">
                        <div className="juices_img">
                            <img src={item.imgUrl} alt="img-juices"/>
                        </div>
                        <h3 className="juices_name">{item.name}</h3>
                        <div className="juices_size">1л</div>
                        <div onClick={() => addBasket(item)} className="juices_wrapp">
                            <div className="juices_wrapp_price">{item.price} руб</div>
                            <div className="juices_wrapp_basket">в корзину</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}