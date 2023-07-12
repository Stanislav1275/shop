import React, {FC} from "react";
import {Outlet} from "react-router-dom";

import Header from "./general.components/Header";
import Footer from "./general.components/Footer";
import * as ST from "./styled";
import Main from "./general.components/Main";

const MainLayout: FC = () => (
    <ST.MainLayout>
        <Header/>
        <Main>
            <Outlet/>
        </Main>
        <Footer/>
    </ST.MainLayout>
);

export default MainLayout;
