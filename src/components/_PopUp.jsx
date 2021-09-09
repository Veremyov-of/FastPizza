
import { useDispatch } from "react-redux";

export default function PopUp() {
    const dispatch = useDispatch();
    const togglePopup = () => {
        dispatch({type: "POP_UP"});
        
    }
    const send = () => {
        dispatch({type: "SEND_ALL"});
        dispatch({tupe: "CLEAR_SUM"})
        dispatch({type: "POP_UP"});
    }
    return(
        <div className='background_popup'>
            <form className="container_popup">
                <button type="button" onClick={togglePopup} className="close_popup"><img src="./img/close.png" alt="img"/></button>
                <input maxLength="20" type="phone" placeholder="Телефон" className="popup_large_input"/>
                <input maxLength="15" type="text" placeholder="Имя" className="popup_large_input"/>
                <div className="popup_wrapp">
                    <input maxLength="40" placeholder="Адрес" className="popup_large_input"/>
                    <input maxLength="9" placeholder="Дом" className="popup_small_input"/>
                    <input maxLength="9" placeholder="Корпус" className="popup_small_input"/>
                    <input maxLength="9" placeholder="Кв" className="popup_small_input"/>
                    <input maxLength="9" placeholder="Подъезд" className="popup_normal_input"/>
                    <input maxLength="9" placeholder="Этаж" className="popup_normal_input"/>
                </div>
                <button className="popup_choice">
                    <div className={`popup_choice_item popup_choice_itemActive`}>Наличными</div>
                    <div className={`popup_choice_item `}>Картой</div>
                </button>
                <button onClick={send} className="popup_send">Отправить</button>
            </form>
        </div>
    );
}