import React, { FC } from "react";

import {
	Props,
	useGetTodoQuery
} from "../../../business.InterfaceLayer/store/shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
// import { Component1 } from "test-lib";

const MainPage: FC = () => {
	// console.log(Component1);

	// eslint-disable-next-line
	const {data, isError,isLoading,isFetching, isSuccess} = useGetTodoQuery(
		{authToken:"", params : {id:"32"}} as Props);
	// eslint-disable-next-line no-console
	console.log(data);

	return <div>SvyatoslavZhilinMainPage</div>;
};

export default MainPage;
