import React, {FC} from "react";

// import frog from "./frog.png";
import * as ST from "./styled";
import CardList from "../../Components/CardList.hoc";


const MainPage: FC = () => {
    // eslint-disable-next-line no-console

    return <ST.MainPage>


       <CardList/>
    </ST.MainPage>;
};

export default MainPage;

