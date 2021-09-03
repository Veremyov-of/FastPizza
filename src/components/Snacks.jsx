import { useDispatch, useSelector } from "react-redux";

export default function Snacks() {
    const dispatch = useDispatch();
    const snacks = useSelector(state => state.snacks);
    const addBasket = (item) => {
        dispatch({type: 'ADD_BASKET', payload: item});
        dispatch({type: 'ADD_BASKET_SUM', payload: item.price})
    }
    const selectionSize = (item) => {
        const indexItem = snacks.indexOf(item);
        dispatch({type: 'SELECTION_SIZE_SNACKS', payload: indexItem});
    }
    return (
        <div id="snacks" className="container_snacks section">
            <h2 className="snacks_title">Закуски</h2>
            <div className="snacks_inner">
                {snacks.map((item, index) => (
                    <div key={index} className="snacks">
                        <div className="snacks_img">
                            <img src={item.imgUrl} alt="img-snacks"/>
                        </div>
                        <h3 className="snacks_name">{item.name}</h3>
                        <div className="snacks_composition">{item.composition}</div>
                        <button onClick={() => selectionSize(item)} className="snacks_size">
                            <div className={`snacks_size_btn ${item.size ? '' : 'active_snacks'}`}>Стандартная</div>
                            <div className={`snacks_size_btn ${item.size ? 'active_snacks' : ''}`}>Большая</div>
                        </button>
                        <div className="snacks_wrapp">
                            <div className="snacks_wrapp_price">{item.size ? item.bigPrice : item.price} руб</div>
                            <div onClick={() => addBasket(item)} className="snacks_wrapp_basket">в корзину</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}