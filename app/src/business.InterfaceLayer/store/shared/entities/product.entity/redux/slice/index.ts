import { createSlice } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../reducerPaths";

export enum EProduct {
	id = "id",
	description = "description",
	category = "category",
	thumbnail="thumbnail",
	price = "price"
}

export interface IProduct {
	[EProduct.id]: string;
	[EProduct.description]: string;
	[EProduct.category]: string;
	[EProduct.thumbnail]: string;
	[EProduct.price]: number;

}

export const initialProductsState: Array<IProduct> = [];

export const productsSlice = createSlice({
	name: reducerPaths.products,
	initialState: initialProductsState,
	reducers: {
		// undefined() {
		// 	return initialTodoState;
		// },
	},
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
