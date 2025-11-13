import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productSliceReducer from './ProductsSlice';

const WarehouseStore = configureStore(
    {
      reducer: combineReducers( { productSliceReducer })
    } );

export default WarehouseStore;
export type WarehouseState = ReturnType<typeof WarehouseStore.getState>;
export type AppDispatch = typeof WarehouseStore.dispatch;