// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {Component, FC, ReactNode} from "react";

import {IFetchReducerProps} from "./types";
import Error from "../../../../../user.InterfaceLayer/Components/general.components/Error";
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
    // eslint-disable-next-line no-console
    console.log(process);
    switch (process){
        case EFetchStatus.isLoading || EFetchStatus.isFetching || EFetchStatus.isUninitialized:{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if(SkeletonContent != null){
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return <SkeletonContent/>;
            }else{
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return <Component {...data}/>;

            }
        }
        case EFetchStatus.isError:{
            return <Error/>;
        }
        case EFetchStatus.isSuccess:{

            // eslint-disable-next-line @typescript-eslint/no-empty-function
            setTimeout(()=> {

            },1000);

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
export const FetchMapper = ({isError, isSuccess, isFetching, isLoading, isUninitialized} : IFetchStatusCombine):EFetchStatus => {
    if(isError) return EFetchStatus["isError"];
    else if(isLoading || isFetching) return EFetchStatus["isLoading"];
    else if(isUninitialized) return EFetchStatus["isUninitialized"];
    else if(isSuccess) return EFetchStatus["isSuccess"];
    else return EFetchStatus["isSuccess"];
};