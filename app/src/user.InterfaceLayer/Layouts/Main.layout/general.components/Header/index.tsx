import React, {FC} from "react";
import {NavLink} from "react-router-dom";

import logo from "./assets/logo.svg";
import profile from "./assets/profile.svg";
import favorite from "./assets/favorite.svg";
import target from "./assets/target.svg";
import * as st from "./styled";
const Header: FC = () => {

    return <st.Header className = "d-flex">
        <div className="logoBlock d-flex align-center">
            <div>
                <NavLink to="/">
                    <img src={logo} alt="s"/>
                </NavLink>
            </div>
            <div className="d-flex align-center">
                <h4>Кросовки</h4>
            </div>
        </div>
        <div className="profileBlock d-flex justify-between align-center">
            <button>
                <img src={target} alt="target"/>
            </button>
            <button>
                <NavLink to="favorite">
                    <img src={favorite} alt="fav"/>
                </NavLink>
            </button>
            <button>
                <NavLink to="favorite">
                    <img src={profile} alt="prof"/>
                </NavLink>
            </button>
        </div>
    </st.Header>;
};
export default Header;