import { useDispatch, useSelector } from "react-redux";
import AboutOpen from "./AboutOpen";

export default function About() {
    const dispatch = useDispatch();
    const about = useSelector(state => state.about.about);
    const toggleAbout = () => {
        dispatch({type: 'TOGGLE_ABOUT', payload: !about})
    }
    return (
        <div className="about container ">
            <h1 className="about_title">Пицца в Москве с «Fast Pizza»</h1>
            <div className="about_wrapp">
                <div className="about_wrapp_text">Проголодались, а в холодильнике пусто или не взяли домашний обед в офис? Всего один звонок, раз, два и пицца уже на вашем столе!</div>
                <div className="about_wrapp_text">Мы предлагаем заказать пиццу с доставкой в Москве, приготовленную с любовью и теплом. У нас большое меню, поэтому голодным никто не останется точно! Выберите пиццу классическую или с оригинальным сочетанием ингредиентов, если есть желание эксперимента и новых вкусовых ощущений. Найдётся пицца на заказ и для вегетарианцев, и для тех кто хочет попробовать нашу секретную фирменную пиццу.</div>
                <div className="about_wrapp_text">Заказать пиццу с быстрой доставкой можно практически круглосуточно: кухня работает для вас с 10:00 до 02:00 каждый день. И в течение 45 минут услышите аромат хрустящего теста, или получите пиццу бесплатно. Для желающих у нас работает услуга самовывоза и предоставляется скидка 20% на любую пиццу.</div>
            </div>
            {about ? <AboutOpen /> : <button onClick={toggleAbout} className="about_btn">Подробнее</button>}
        </div>
    );
}