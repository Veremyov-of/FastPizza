import { HashLink } from "react-router-hash-link";

export default function Contacts() {
    return (
        <div className="wrapp_contacts">
            <div className="contacts container">
                <div className="contacts_main">
                    <div className="contacts_main_phone">
                        <img src="./img/contacts/phone.png" alt="img"/>
                        <a className="contacts_main_phone_link" href="/">+777 777 77 777</a>
                    </div>
                    <div className="contacts_main_time">
                        <img src="./img/contacts/time.png" alt="img"/>
                        <span>10:00-02:00</span>
                    </div>
                    <div className="contacts_main_mail">
                        <img src="./img/contacts/mail.png" alt="img"/>
                        <a className="contacts_main_mail_link" href="/">fastpizza@mail.ru</a>
                    </div>
                </div>
                <div className="contacts_social">
                    <div className="contacts_social_links">
                        <a href="/">
                            <img src="./img/contacts/instagram.png" alt="img"></img>
                        </a>
                        <a href="/">
                            <img src="./img/contacts/vk.png" alt="img"></img>
                        </a>
                    </div>
                    <div className="contacts_social_phone">
                        <a href="/" className="contacts_social_phone_text">9313</a>
                        <div className="contacts_social_phone_logos">
                            <img src="./img/logoA.png" alt="logo"/>
                            <img src="./img/logoM.png" alt="logo"/>
                            <img src="./img/logoL.png" alt="logo"/>
                        </div>
                    </div>    
                </div> 
            </div>
            <div className="info container">
                <div className="info_wrapp">
                    <HashLink to="/delivery#deliveryid" className="info_wrapp_link">Условия доставки</HashLink>
                    <a href="/" className="info_wrapp_link">Договор оферты</a>
                    <a href="/" className="info_wrapp_link">Ваканси</a>
                </div>
                <div className="info_pay">
                    <a href="/" className="info_pay_link">Положение об оплате и безопасности платежей</a>
                    <a href="/" className="info_pay_link">Способы оплаты. Инструкция об оплате ЕРИП</a>
                </div>
            </div>
            <div className="address container">
                <div className="address_main">
                    <div className="address_main_text">119017, ул. Большая Полянка, 61 строение 1, Москва, Россия</div>
                    <div className="address_main_text">Интернет-магазин зарегистрирован в Торговом реестре РФ 01.11.2018г. Регистрационный номер 430674.</div>
                </div>
                <div className="address_ooo">
                    ООО «Чень вкусно»
                    УНП: 491331834
                </div>
            </div>
        </div>
    );
}