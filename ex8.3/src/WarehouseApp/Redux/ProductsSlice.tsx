import { Product } from '../WarehouseTypes';
import { Products, DummyProduct } from '../DummyInventory';
// 3. to integrate our web service, we'll first need to import the functions we wrote to access the web service.
import { getProducts, deleteProduct } from '../Services/ProductServices';
// 4. need the createAsyncThunk function from the Redux toolkit.
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';


// 16.
import { updWarehouse } from './WarehousesSlice';




// 11. adding the thunk function that calls our deleteProduct web service function. 
// Notice that we're giving this function the same name as the reducer function we deleted
export const removeProduct = createAsyncThunk(
   'deleteProduct',
   async (prodId: number) => {
      await deleteProduct(prodId);
      return prodId;
   }
);


// 7. Now we'll add a thunk function to call our web service and retrieve our products. 
// As soon as our call to the web service has finished running (is "fulfilled"), our "extra reducer" will run. 
// The products retrieved by this web service call will automatically be passed to our "extra reducer" in the payload.
export const fetchProducts = createAsyncThunk<Product[]>(
   'getProducts',
   async () => {
      return await getProducts();
   }
);
// NB: see above...We've done some sleight-of-hand here. 
// We used to have a method called fetchProducts that our application called. 
// We've deleted that function and added this new function which is also called fetchProducts. 
// So, even though we've done radical surgery to our products' slice component to incorporate our web service, 
// we shouldn't have to change our other components at all because the name (our component's API) hasn't changed. 
// This is a good rule to follow when working with components: ideally, 
// changes to the internal workings of one component shouldn't be obvious to other components.


export interface ProductState {
   productsList: Product[],
   selectedProduct: Product
}

const initialProductState: ProductState = {
   productsList: [],
   selectedProduct: DummyProduct
};

export const productSlice = createSlice(
   {
      name: 'product',
      initialState: initialProductState,
      reducers:
      {
         setSelectedProduct: (state,
            prd: PayloadAction<Product>) => {
            state.selectedProduct = prd.payload;
         }
         // 5. We're going to call our fetchCustomers method from one of our "extra reducers," 
         // so we don't need the one that works with our dummy data any more. In your reducers section, 
         // delete the fetchProducts function that sets our state with the Products array
         //fetchProducts: (state) => {
         //   state.productsList = Products;
         //},
         // 8. Now we'll integrate the web service function that deletes a product object 
         // and use it to also delete a product from our productsList state.
         // removeProduct function and delete it
         //removeProduct: (state,
         //   id: PayloadAction<number>) => {
         //   let index: number = state.productsList.findIndex(p => id.payload === p.productId);
         //   state.productsList.splice(index, 1);
         //}
      },
      // 6. next step is to add the "extra reducer" that will be called after we call our web service. 
      // This function will update our productsList state with the payload retrieved from our web service 
      // (in Redux talk: after our web service call is 'fulfilled'). 
      // Getting this section in the right place matters, so make sure you put this bolded code in the right place
      extraReducers: builder => {
         builder
            .addCase(fetchProducts.fulfilled,
               (state, action) => {
                  state.productsList = action.payload;
               })
            // 10. add another case to the extra reducers so that, once the removeProduct function ends, 
            // it removes the product from our productsList state
            .addCase(removeProduct.fulfilled, (state, action) => {
               let index: number =
                  state.productsList.findIndex(
                     p => p.productId === action.payload);
               state.productsList.splice(index, 1);
            })
            // 17. add a new addCase to the end of the extraReducers
            .addCase(updWarehouse.fulfilled, (state, action) => {
               // 18. remove the existing warehouse object from the selectedProduct's warehouses collection 
               // and add in your updated warehouse object
               let index: number = state.selectedProduct.warehouses.findIndex(
                  w => w.warehouseId === action.payload.warehouseId);
               state.selectedProduct.warehouses.splice(index, 1);
               state.selectedProduct.warehouses.push(action.payload);
            });
         // 19. Save your changes and try changing information about a warehouse. 
         // You should find that, when you return to the home screen, 
         // your updated warehouse information is displayed.
      }
   });

// 12. Final step: since fetchProducts and removeProduct are no longer part of our reducer 
// (they're now separate thunk functions), we can't export them from our product slice anymore. 
// update the export statement to remove fetchProducts and removeProduct:
// export const { setSelectedProduct, fetchProducts, removeProduct } = productSlice.actions;
export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;