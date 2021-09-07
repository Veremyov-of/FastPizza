import { useDispatch, useSelector } from "react-redux";

export default function Snacks() {
    const dispatch = useDispatch();
    const desserts = useSelector(state => state.desserts);
    const addBasket = (item) => {
        const newItem = {...item};
        dispatch({type: 'ADD_DESSERTS', payload: newItem});
        dispatch({type: 'ADD_BASKET_SUM', payload: item.price})
    }
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
                            <div className="desserts_wrapp_price">{item.price} руб</div>
                            <div onClick={() => addBasket(item)} className="desserts_wrapp_basket">в корзину</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}