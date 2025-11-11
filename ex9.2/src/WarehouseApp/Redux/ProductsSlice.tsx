import { Product } from '../WarehouseTypes';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { DummyProduct } from '../DummyInventory';
import { getProducts, deleteProduct } from '../Services/ProductServices';
import { updWarehouse } from './WarehousesSlice';

export const fetchProducts = createAsyncThunk<Product[]>(
   'getProducts', 
   async () => {
         return await getProducts();
   }
);

export const removeProduct = createAsyncThunk(
   'deleteProduct', 
     async (prodId: number) => {
        await deleteProduct(prodId);
        return prodId;
   }
);

export interface ProductState {
   productsList: Product[],
   selectedProduct: Product
}; 

const initialProductState: ProductState = {
   productsList: [],
   selectedProduct: DummyProduct
}; 

export const productSlice = createSlice(
   { name: 'product', 
     initialState: initialProductState, 
     reducers: {
                setSelectedProduct: (state, 
                                     prd:PayloadAction<Product>) => {
                    state.selectedProduct = prd.payload;
                }, 
                deleteProduct: (state, 
                       id:PayloadAction<number>) => {
                     let index:number = state.productsList.findIndex(p => id.payload === p.productId);
                     state.productsList.splice(index, 1);                   
                  } ,                               
		      },
      extraReducers: builder => {
               builder
                 .addCase(fetchProducts.fulfilled, (state, action) => {
                   state.productsList = action.payload;
               })
               .addCase(removeProduct.fulfilled, (state, action) => {
                 let index:number = state.productsList.findIndex(p => p.productId === action.payload);
                 state.productsList.splice(index,1);
             })
             .addCase(updWarehouse.fulfilled, (state, action) => {
               let index:number = state.selectedProduct.warehouses.findIndex(
                           w => w.warehouseId === action.payload.warehouseId);
               state.selectedProduct.warehouses.splice(index,1);
               state.selectedProduct.warehouses.push(action.payload);
             })
         }
   }
);

export const { setSelectedProduct } = productSlice.actions; 
export default productSlice.reducer;