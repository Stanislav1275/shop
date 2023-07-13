import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

import {todoApi} from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import {todoReducer} from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import reducerPaths from "./reducerPaths";
import {productsApi} from "./shared/entities/product.entity/redux/api";
import {productsReducer} from "./shared/entities/product.entity/redux/slice";

const allSliceReducersReducer = combineReducers({
    [todoApi.reducerPath]: todoApi.reducer,
    [reducerPaths.todo]: todoReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reducerPaths.products]: productsReducer,

});

export const store = configureStore({
    reducer: allSliceReducersReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware).concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
