import React, {FC} from "react";

import * as ST from "./styled";
import Card from "../Card";
import {useGetProductsQuery} from "../../../business.InterfaceLayer/store/shared/entities/product.entity/redux/api";

const CardList: FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {data, isError,isSuccess,isFetching,isLoading,isUninitialized} = useGetProductsQuery({});

    return (<ST.CardList>

    </ST.CardList>);
};
export default CardList;