import React from "react";
import { Link } from "react-router-dom";

export default function Overheader() {
    return (
        <div className="overheader container">
            <Link to="/"className="overheader_logo">
                <img className="overheader_logo_img" src="./img/logo.png" alt="logo"/>
            </Link>
            <div className="overheader_stock">
                <div className="overheader_stock_time">45 минут</div>
                <div className="overheader_stock_text">или пицца бесплатно</div>
            </div>
            <div className="overheader_phone">
                <a href="/" className="overheader_phone_number">9313</a>
                <div className="overheader_phone_inner">
                    <img className="overheader_phone_inner_img" src="./img/logoA.png" alt="logo_phone"/>
                    <img className="overheader_phone_inner_img" src="./img/logoM.png" alt="logo_phone"/>
                    <img className="overheader_phone_inner_img" src="./img/logoL.png" alt="logo_phone"/>
                </div>
            </div>
            <div className="overheader_work">
                <div className="overheader_work_text">Время работы</div>
                <div className="overheader_work_time">с 10:00 до 02:00</div>
            </div>
        </div>
    );
}
