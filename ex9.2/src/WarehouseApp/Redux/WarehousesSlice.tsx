import { Warehouse } from '../WarehouseTypes';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWarehouses, updateWarehouse } from '../Services/WarehouseServices';

export interface WarehousesState {
    warehouseList: Warehouse[]
 }; 
 
 const initialProductState: WarehousesState = {
    warehouseList: []
 }; 

 export const fetchWarehouses = createAsyncThunk<Warehouse[]>(
    'getWarehouses', 
    async () => {
        return await getWarehouses();
  }
);

export const updWarehouse = createAsyncThunk(
    'updWarehouse', 
      async (wh: Warehouse) => {
       let whReturned:Warehouse = await updateWarehouse(wh);
       return whReturned;
   }
);
 
export const warehouseSlice = createSlice(
    { name: 'warehouse', 
      initialState: initialProductState, 
      reducers: { },
     extraReducers: builder => {
                builder
                  .addCase(updWarehouse.fulfilled, (state, action) => {
                   let index:number = state.warehouseList.findIndex(wh => wh.warehouseId === action.payload.warehouseId);
                   state.warehouseList.splice(index,1);
                   state.warehouseList.push(action.payload);
                });
             }
          }
);

export default warehouseSlice.reducer;