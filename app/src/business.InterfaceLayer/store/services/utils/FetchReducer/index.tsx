// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {Component, FC} from "react";

import {IFetchReducerProps} from "./types";
export enum EFetchStatus {
    isError="isError",
    isSuccess="isSuccess",
    isFetching="isFetching",
    isLoading="isLoading",
    isUninitialized="isUninitialized",
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FetchReducer : FC<IFetchReducerProps> = ({process, Component, SkeletonContent, data}) => {
    switch (process){
        case EFetchStatus.isLoading || EFetchStatus.isFetching || EFetchStatus.isUninitialized:{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if(SkeletonContent){
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return <SkeletonContent/>;
            }else{
                return null;
            }
        }
        case EFetchStatus.isError:{
            return <div>Ошибка сервера</div>;
        }
        case EFetchStatus.isSuccess:{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return <Component {...data}/>;
        }
    }
};

type IFetchStatusCombine = {
    [EFetchStatus.isError]:boolean;
    [EFetchStatus.isSuccess]:boolean;
    [EFetchStatus.isFetching]:boolean;
    [EFetchStatus.isLoading]:boolean;
    [EFetchStatus.isUninitialized]:boolean;

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FetchMapper = ({isError, isSuccess, isFetching, isLoading, isUninitialized} : IFetchStatusCombine) => {
    if(isError) return EFetchStatus["isError"];
    else if(isLoading || isFetching) return EFetchStatus["isLoading"];
    else if(isUninitialized) return EFetchStatus["isUninitialized"];

};