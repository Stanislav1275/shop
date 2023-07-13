import React, {lazy, Suspense} from "react";
import {RouteObject} from "react-router-dom";

import RoutesPaths from "../../routesPaths";
import Error from "../../../Components/general.components/Error";
// import MainLayout from "../../../Layouts/Main.layout";
import Loader from "../../../Components/general.components/Loader";

const MainPage = lazy(
    () => import("../../../Pages/Main.page.allCards")
);
const shopRoutes: RouteObject[] = [
    {

        path: RoutesPaths.MAIN,
        element: (
            <Suspense fallback={<Loader/>}>
                <MainPage/>
            </Suspense>
        ),
        errorElement: <Error/>,

        // children: [
        // 	{
        // 		element: (
        // 			<Suspense fallback={<Loader />}>
        // 				<MainPage />
        // 			</Suspense>
        // 		),
        // 		errorElement: <Error />,
        // 		path:"/main"
        // 	},
        // 	// {
        // 	// 	path: routesPaths.LAST,
        // 	// 	element: (
        // 	// 		<Suspense fallback={<Loader />}>
        // 	// 			<LastPage />
        // 	// 		</Suspense>
        // 	// 	),
        // 	// 	errorElement: <Error />,
        // 	// },
        // 	{
        // 		path: RoutesPaths.NOT_FOUND,
        // 		element: <div>страницы нет</div>,
        // 	},
        // ],
    },
    {
        path: RoutesPaths.NOT_FOUND,
        element: <div>страницы нет</div>,
    },
];

export default shopRoutes;
