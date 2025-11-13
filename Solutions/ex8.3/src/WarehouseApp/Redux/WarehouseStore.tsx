import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productSliceReducer from './ProductsSlice';
import warehouseSliceReducer from './WarehousesSlice';

const WarehouseStore = configureStore(
    {
      reducer: combineReducers({ warehouseSliceReducer, productSliceReducer })
    });

export default WarehouseStore;
export type WarehouseState = ReturnType<typeof WarehouseStore.getState>;
export type AppDispatch = typeof WarehouseStore.dispatch;