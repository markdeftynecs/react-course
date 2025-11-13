import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../WarehouseTypes';
import { Products, DummyProduct } from '../DummyInventory';


// We'll start by defining an interface that describes what state data we're keeping in this reducer
// —in this case, an array of products and the currently select product:
export interface ProductState {
    productsList: Product[],
    selectedProduct: Product
};

// Using that ProductState interface, 
// we'll define an object that we'll load with our initial state
// —in this case, our initial state is an empty array of type Product 
// and a selected product set to our dummy product:
const initialProductState: ProductState = {
    productsList: [],
    selectedProduct: DummyProduct
};


/* Now we'll start defining our product slice's reducer function. We'll call the function createSlice and set three properties:
    name: the string product (this is used to identify the slice)
    initialState: the object we set up in the previous step (to initialize our state data)
    reducers: to be filled in with the functions that update our state data */
export const productSlice = createSlice(
    {
        name: 'product',
        initialState: initialProductState,

        /** Now, we'll add the functionality in our reducer. In our case we want three functions:
            Set the selected product.
            Update state with the list of products passed in.
            Delete a product from the list of products. */
        reducers: {
            // Our first reducer will set the selectedProduct property on our state using the product passed into the slice:
            setSelectedProduct: (state, prd: PayloadAction<Product>) => {
                state.selectedProduct = prd.payload;
            },

            // load the state's list of products. 
            // For now, we'll just set the state's productsList to our dummy array of product objects
            fetchProducts: (state) => {
                state.productsList = Products;
            },

            // remove an item from the list of products in our state,
            //  using the product id passed to the reducer
            removeProduct: (state, id: PayloadAction<number>) => {
                let index: number =
                    state.productsList
                        .findIndex(
                            p => id.payload === p.productId);
                state.productsList.splice(index, 1);
            }



        }
    }
);

/* ------- EXPORTS ------- */

export const { setSelectedProduct, fetchProducts, removeProduct } = productSlice.actions;

export default productSlice.reducer;















