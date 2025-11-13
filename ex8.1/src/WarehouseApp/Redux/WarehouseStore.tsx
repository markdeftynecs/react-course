import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productSliceReducer from './ProductsSlice';


// Call the configureStore function 
// to make all of your reducers available to your application through a single interface:
const WarehouseStore = configureStore(
    {
        // Currently, we only have one reducer, 
        // so we'll use combineReducers to enable us to add additional reducers in the future
        reducer: combineReducers({ productSliceReducer })

    });

/* ------- EXPORTS ------- */

// Add these export statements to the end of the file. We need to export the:
/* 
WarehouseStore
The type of its getState property
The type of its dispatch object
 */

export default WarehouseStore;
export type WarehouseState = ReturnType<typeof WarehouseStore.getState>;
export type AppDispatch = typeof WarehouseStore.dispatch;
