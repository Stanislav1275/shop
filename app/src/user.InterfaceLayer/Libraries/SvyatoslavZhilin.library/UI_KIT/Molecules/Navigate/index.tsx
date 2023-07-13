import React, {FC} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import navIcon from "../../../assets/icons/navICon.svg";
import * as ST from "./styled";
import {routesMapper} from "../../../../../router/routes/shop.route/routesMapper";
//сделать пропс для h
const Navigate :FC = () => {
    const {pathname} = useLocation();
    const nav = useNavigate();

//молекула
//сделать атом Image
    //перекинуть в атом navigate
    //
    return (
        <ST.Navigate>
            {pathname !== "/"? <button onClick={() => {nav("/");}}>
                <img src={navIcon} alt=""/>
            </button>: null}
            <h1>{routesMapper[pathname] || "Неизвестный путь"}</h1>
        </ST.Navigate>
    );
};
export default Navigate;