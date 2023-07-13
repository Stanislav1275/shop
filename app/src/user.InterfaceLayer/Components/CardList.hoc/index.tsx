import React, {FC} from "react";

import * as ST from "./styled";
import {useGetProductsQuery} from "../../../business.InterfaceLayer/store/shared/entities/product.entity/redux/api";
import {CardListSkelet, CardListUi} from "./ui";
import {FetchMapper, FetchReducer} from "../../../business.InterfaceLayer/store/services/utils/FetchReducer";

const CardList: FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {data = [], isError, isSuccess, isFetching, isLoading, isUninitialized} = useGetProductsQuery({});
    // eslint-disable-next-line no-console
    console.log(data);

    return (<ST.CardList>
        {
            <FetchReducer
                process={
                    FetchMapper({
                        isError,
                        isSuccess,
                        isFetching,
                        isLoading,
                        isUninitialized
                    })
                }
                Component={CardListUi as FC<any>}
                data={{products:data}}
                SkeletonContent={CardListSkelet as FC<any>}
            />
        }
    </ST.CardList>);
};

export default CardList;
