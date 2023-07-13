import React from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "./routesPaths";
import Error from "../Components/general.components/Error";
import shopRoutes from "./routes/shop.route";
import MainLayout from "../Layouts/Main.layout";
// import MainPage from "../Pages/Main.page.allCards";
//
const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
        element: <MainLayout/>,
		errorElement: <Error />,
		children: [...shopRoutes],
	},
	{
		path: "/auth",
		element: <div>auth</div>,
		errorElement: <Error />,
	}
];

export default mainRouter;
