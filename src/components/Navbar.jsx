import React from "react";
import { Link } from "react-router-dom";

//img
import logo from '../img/logo.png'
import logoA from '../img/logoA.png';
import logoM from '../img/logoM.png';
import logoL from '../img/logoL.png';

export default function Navbar() {
    return (
        <div className="overheader container">
            <Link to="/Home"className="overheader_logo">
                <img className="overheader_logo_img" src={logo} alt="logo"/>
            </Link>
            <div className="overheader_stock">
                <div className="overheader_stock_time">45 минут</div>
                <div className="overheader_stock_text">или пицца бесплатно</div>
            </div>
            <div className="overheader_phone">
                <Link className="overheader_phone_number">9313</Link>
                <div className="overheader_phone_inner">
                    <img className="overheader_phone_inner_img" src={logoA}/>
                    <img className="overheader_phone_inner_img" src={logoM}/>
                    <img className="overheader_phone_inner_img" src={logoL}/>
                </div>
            </div>
            <div className="overheader_work">
                <div className="overheader_work_text">Время работы</div>
                <div className="overheader_work_time">с 10:00 до 02:00</div>
            </div>
        </div>
    );
}
