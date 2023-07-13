import React, {FC} from "react";

import * as ST from "./styled";
import Card from "../Card";

const CardList: FC = () => {
    return (<ST.CardList>
        <Card isGreenBtnSelected={true} isFavorite={true} category={"cat"} description={"des"} price={1000} thumbnail={"https://img3.likewear.ru/82/ee/82eeb9bc4cb58b41bad551f9a469fbbc.jpg"}/>
        <Card isGreenBtnSelected={false} isFavorite={false} category={"cat1"} description={"des2"} price={500} thumbnail={"https://img3.likewear.ru/82/ee/82eeb9bc4cb58b41bad551f9a469fbbc.jpg"}/>
        <Card isGreenBtnSelected={false} isFavorite={false} category={"cat1"} description={"des2"} price={500} thumbnail={"https://img3.likewear.ru/82/ee/82eeb9bc4cb58b41bad551f9a469fbbc.jpg"}/>
        <Card isGreenBtnSelected={false} isFavorite={false} category={"cat1"} description={"des2"} price={500} thumbnail={"https://img3.likewear.ru/82/ee/82eeb9bc4cb58b41bad551f9a469fbbc.jpg"}/>
        <Card isGreenBtnSelected={false} isFavorite={false} category={"cat1"} description={"des2"} price={500} thumbnail={"https://img3.likewear.ru/82/ee/82eeb9bc4cb58b41bad551f9a469fbbc.jpg"}/>
        <Card isGreenBtnSelected={false} isFavorite={false} category={"cat1"} description={"des2"} price={500} thumbnail={"https://img3.likewear.ru/82/ee/82eeb9bc4cb58b41bad551f9a469fbbc.jpg"}/>
        <Card isGreenBtnSelected={false} isFavorite={false} category={"cat1"} description={"des2"} price={500} thumbnail={"https://img3.likewear.ru/82/ee/82eeb9bc4cb58b41bad551f9a469fbbc.jpg"}/>
        <Card isGreenBtnSelected={false} isFavorite={false} category={"cat1"} description={"des2"} price={500} thumbnail={"https://img3.likewear.ru/82/ee/82eeb9bc4cb58b41bad551f9a469fbbc.jpg"}/>
    </ST.CardList>);
};
export default CardList;