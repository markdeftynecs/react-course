/*
let's convert our warehouse data to Redux and use the updateWarehouse web services.
 We'll add a new slice and upgrade the WarehouseEdit component.
*/
import { Warehouse } from '../WarehouseTypes';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWarehouses, updateWarehouse } from '../Services/WarehouseServices';

// 1. Set up the interface to hold our state and an object that uses that interface to set our initial data (an empty array of warehouses):
export interface WarehousesState {
    warehouseList: Warehouse[]
};

// 2. and an object that uses that interface to set our initial data (an empty array of warehouses):
const initialProductState: WarehousesState = {
    warehouseList: []
};

// 3. add the thunk function that will call the web service functions we created earlier to update a warehouse
export const updWarehouse = createAsyncThunk(
    'updWarehouse',
    async (wh: Warehouse) => {
        let whReturned: Warehouse = await updateWarehouse(wh);
        return whReturned;
    }
);

// 4. create the reducer. 
// This just has an 'extra reducer' that updates the local store after the function has called the web service
export const warehouseSlice = createSlice(
    {
        name: 'warehouse',
        initialState: initialProductState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(
                updWarehouse.fulfilled, (state, action) => {
                let index: number = state.warehouseList.findIndex(
                    wh => wh.warehouseId === action.payload.warehouseId);
                state.warehouseList.splice(index, 1);
                state.warehouseList.push(action.payload);
            }
            );
        }
    }
);













// 5. At the bottom of the file export our slice's reducer:
export default warehouseSlice.reducer;
// 6. NB: We don't need an export statement for our thunk function because we used the export keyword on the function's declarations

// 7. The last Redux-related step is to add our warehouse slice to our store:WarehouseStore.tsx
