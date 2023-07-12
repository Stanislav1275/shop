import React, {FC, ReactNode} from "react";

import * as st from "./styled";

type Props = {
    children: ReactNode
}
const Main: FC<Props> = ({children}) => {

    return <st.Main>{children}</st.Main>;
};
export default Main;