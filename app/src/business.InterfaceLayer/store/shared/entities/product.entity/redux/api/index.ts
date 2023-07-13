

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../reducerPaths";
import url from "../../services/url";
import httpMethods from "../../../../http/httpMethods";
import { todoFromDtoServiceArray } from "../../services/dto/from.dto";

// import validateStatus from "../../../../../services/utils/validateStatus";



// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IGetProductsByCategory {
	params:{
		userId:string,
	}
	// category:string,
	// description:string,
	// thumbnail:string
}
export const productsApi = createApi({
	reducerPath: `${reducerPaths.products}/api`,
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3000"
	}),
	tagTypes: [`${reducerPaths.products}TAG`],

	endpoints: (build) => ({
		getProducts: build.query<any, any>({
			query: () => ({
				url: url.products,
				method: httpMethods.GET,
				// headers: {
				// 	Authorization: `Bearer ${authToken}`,
				// },
				// params: params,
				// validateStatus,
			}),
			providesTags: [`${reducerPaths.products}TAG`],
			transformResponse: todoFromDtoServiceArray,
		}),
		getProductsByCategory:build.query<any,IGetProductsByCategory>({
			query:({params}) => ({
				url : url.products,
				method:httpMethods.GET,
				params:params
			})
		})
	}),
});

export const { useGetProductsQuery, useGetProductsByCategoryQuery } = productsApi;
