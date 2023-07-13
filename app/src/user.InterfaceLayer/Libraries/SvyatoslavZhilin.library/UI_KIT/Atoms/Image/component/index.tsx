import React, {FC} from "react";

import * as ST from "./styled";
type Props = {
    src:any,
    alt?:string
    width:string,
    height:string
}
const Image:FC<Props> = ({src, alt}) => {
    return (
        <img src={src} alt={alt}/>
    );
};
export default Image;