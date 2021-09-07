import { useDispatch, useSelector } from "react-redux";

export default function Beverages() {
    const dispatch = useDispatch();
    const beverages = useSelector(state => state.beverages);
    
    const addBasket = (item) => {
        const newItem = {...item};
        dispatch({type: 'ADD_BEVERAGES', payload: newItem});
        dispatch({type: 'ADD_BASKET_SUM', payload: item.price})
    }
    const selectionSize = (item) => {
        const indexItem = beverages.indexOf(item);
        dispatch({type: 'SELECTION_SIZE_BEVERAGES', payload: indexItem});
    }
    return (
        <div id="beverages" className="container_beverages section">
            <h2 className="beverages_title">Напитки</h2>
            <div className="beverages_inner">
                {beverages.map((item, index) => (
                    <div key={index} className="beverages">
                        <div className="beverages_img">
                            <img src={item.imgUrl} alt="img-beverages"/>
                        </div>
                        <h3 className="beverages_name">{item.name}</h3>
                        <div onClick={() => selectionSize(item)} className="beverages_size">
                            <div className={`beverages_size_btn ${item.size ? '' : 'active_snacks'}`}>0.5л</div>
                            <div className={`beverages_size_btn ${item.size ? 'active_snacks' : ''}`}>1л</div>
                            
                        </div>
                        <div onClick={() => addBasket(item)} className="beverages_wrapp">
                            <div className="beverages_wrapp_price">{item.price} руб</div>
                            <div className="beverages_wrapp_basket">в корзину</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}