import React, { FC } from "react";

import frog from "./frog.png";
import * as ST from "./styled";


const MainPage: FC = () => {


	return <ST.MainPage>
		<ST.ImgBlock>
			<img src={frog} alt="frog"/>
		</ST.ImgBlock>
	</ST.MainPage>;
};

export default MainPage;

