import React, {FC} from "react";
import {Outlet, useLocation} from "react-router-dom";

import frog from "./frog.png";
import Header from "./general.components/Header";
import * as ST from "./styled";
import Main from "./general.components/Main";
import Navigate from "../../Components/Navigate";
import * as GLST from "../../Components/styled";

const MainLayout: FC = () => {
    const loc = useLocation();

    return (
    <ST.MainLayout>
        <Header/>
        {loc.pathname === "/" ?
            <GLST.ImgBlock>
                <img src={frog} alt="frog"/>
            </GLST.ImgBlock>
            :
            null
        }
        <Main>
            <Navigate/>
            <Outlet/>
        </Main>
        {/*<Footer/>*/}
    </ST.MainLayout>);
};

export default MainLayout;
