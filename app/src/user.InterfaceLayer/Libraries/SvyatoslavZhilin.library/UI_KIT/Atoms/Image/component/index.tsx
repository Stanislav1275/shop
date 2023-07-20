import React, {FC} from "react";

type Props = {
    src:any,
    alt?:string
    width?:string,
    height?:string
}
const Image:FC<Props> = ({src="", alt="non",width="32px", height="32px"}) => {
    return (
        <img style = {{width, height}} src={src} alt={alt}/>
    );
};
export default Image;