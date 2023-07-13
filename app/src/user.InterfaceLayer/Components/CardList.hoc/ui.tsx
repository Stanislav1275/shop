import React, {FC} from "react";

import {IProduct} from "../../../business.InterfaceLayer/store/shared/entities/product.entity/redux/slice";
import Card, {SkeletonCard} from "../Card";
type Props = {
    products : IProduct[]
}
export const CardListUi :FC<Props>= ({products}) => {
    return <>
        {
            products?.map(({category, description,id,price,thumbnail}) => {
                return <Card key = {id} category={category} description={description} id={id} isFavorite isGreenBtnSelected price={price} thumbnail={thumbnail}/>;
            })
        }
    </>;
};
export const CardListSkelet:FC = () => {

    return <>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
    </>;
};