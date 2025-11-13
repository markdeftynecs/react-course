import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productSliceReducer from './ProductsSlice';
import warehouseSliceReducer from './WarehousesSlice';

const WarehouseStore = configureStore(
  {
    reducer: combineReducers({ productSliceReducer,
                               warehouseSliceReducer })
  } );

export default WarehouseStore;
export type WarehouseState = ReturnType<typeof WarehouseStore.getState>;
export type AppDispatch = typeof WarehouseStore.dispatch;