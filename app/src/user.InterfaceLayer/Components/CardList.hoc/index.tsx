import React, {FC} from "react";

import * as ST from "./styled";
import {useGetProductsQuery} from "../../../business.InterfaceLayer/store/shared/entities/product.entity/redux/api";
import {CardListUi} from "./ui";

const CardList: FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {data = [], isError,isSuccess,isFetching,isLoading,isUninitialized} = useGetProductsQuery({});

    return (<ST.CardList>
        <CardListUi products={data}/>
    </ST.CardList>);
};

export default CardList;
