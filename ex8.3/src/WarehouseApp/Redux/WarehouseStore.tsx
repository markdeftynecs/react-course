import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productSliceReducer from './ProductsSlice';
// 8. 
//import warehouseSliceReducer from './ProductsSlice';
import warehouseSliceReducer from './WarehousesSlice';

const WarehouseStore = configureStore(
  {
    reducer: combineReducers(
      {
        productSliceReducer,
        // 9. Pass the warehouse slice to combineReducers
        warehouseSliceReducer
      }
    )
  });

export default WarehouseStore;
export type WarehouseState = ReturnType<typeof WarehouseStore.getState>;
export type AppDispatch = typeof WarehouseStore.dispatch;

// 10. With our web service functions written and a slice that calls the functions and updates our local store created, 
// we'll integrate the functionality into the edit warehouse component.
// Under the WarehouseApp folder, open the WarehouseEdit.tsx file.
