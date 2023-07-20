import {FC, ReactNode} from "react";

import {EFetchStatus} from "./index";

export type IFetchReducerProps = {
    process:EFetchStatus;
    Component:JSX.Element | FC;
    data:any;
    SkeletonContent:ReactNode | FC
}
