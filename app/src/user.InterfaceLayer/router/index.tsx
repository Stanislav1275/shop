import React from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "./routesPaths";
import Error from "../Components/general.components/Error";
import shopRoutes from "./routes/shop.route";
import MainPage from "../Pages/Main.page";
//
const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
        // element: <MainPage/>,
		errorElement: <Error />,
		children: [...shopRoutes],
	},
];

export default mainRouter;
