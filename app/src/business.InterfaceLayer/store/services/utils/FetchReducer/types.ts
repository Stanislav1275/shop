import {ReactNode} from "react";
import {EFetchStatus} from "./index";

export type IFetchReducerProps = {
    process:EFetchStatus;
    Component:ReactNode;
    data:any;
    SkeletonContent:ReactNode|null
}
export type fetchType = {

}