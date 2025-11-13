import { Product } from '../WarehouseTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products, DummyProduct } from '../DummyInventory';

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
                fetchProducts: (state) => {
                    state.productsList = Products;                    
                },         
               removeProduct: (state, 
                       id:PayloadAction<number>) => {
                     let index:number = state.productsList.findIndex(p => id.payload === p.productId);
                     state.productsList.splice(index, 1);                   
                  }               
		      }
         }
);

export const { setSelectedProduct, fetchProducts, removeProduct } = productSlice.actions; 
export default productSlice.reducer;