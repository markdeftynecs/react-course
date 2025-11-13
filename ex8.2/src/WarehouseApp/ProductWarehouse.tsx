import { Product } from './WarehouseTypes';
import { DummyProduct } from './DummyInventory';
import { useEffect, useCallback, useState } from 'react';
import ProductDisplay, { ProductDisplayProps } from './ProductDisplay';
/* STORE INTEGRATION - STEP 2: not required for store  */
//import {getProducts, deleteProduct} from './Services/ProductServices';

// Add these import statements to access:

/* 
  - The Redux functions we need: useSelector, useDispatch
  - Our WarehouseState object for sending parameters to our store
  - Our AppDispatch type for defining the results of call our dispatch function
  - The three functions in our store that we'll use: fetchProducts, setSelectedProduct, and removeProduct */
import { useSelector, useDispatch } from 'react-redux';
import { WarehouseState, AppDispatch } from './Redux/WarehouseStore';
import { fetchProducts, setSelectedProduct, removeProduct } from './Redux/ProductsSlice';

const ProductWarehouse = (): JSX.Element => {

  // Delete these existing lines that use the state within our component
  //const [selectedProps, setSelectedProps] = useState<ProductDisplayProps>({product: DummyProduct, onRemove: () => {}});  
  //const [Products, setProducts] = useState<Array<Product>>([]);  

  // in their place, add these two lines to access our state data in the local store:
  const Products: Product[] = useSelector((state: WarehouseState) => state.productSliceReducer.productsList);
  const selectedProduct: Product = useSelector((state: WarehouseState) => state.productSliceReducer.selectedProduct);



  // Delete this useEffect (and its related function) that got our data directly from the web service
  /*const fetchProducts = async () =>
  {
    setProducts(await getProducts());
  }
  useEffect( () => {
     fetchProducts();
  },[]);*/

  // Replace it with this useEffect that creates a dispatch function,
  // and then uses it to call a function in our product slice that will load our state data
  // (the second parameter ensures that useEffect is updated whenever dispatch changes)
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // old
  /*const delProduct = (Id: number): void => {
    deleteProduct(Id);
    let index = Products.findIndex(p => Id === p.productId);
    Products.splice(index, 1);
    setSelectedProps({ product: DummyProduct, onRemove: delProductCallback });
  };*/
  // uses our product's slice reducer to
  // Update the local store by using our reducer's delete function
  // Set the selected product to our dummy product, again by using one of reducer's function
  const delProduct = (Id: number): void => {
    dispatch(removeProduct(Id));
    dispatch(setSelectedProduct(DummyProduct));
  }

  const delProductCallback = useCallback(delProduct, [Products]);


  // initialize the props object we'll pass to our productDisplay component:
  let selectedProps: ProductDisplayProps =
  {
    product: DummyProduct,
    onRemove: delProductCallback
  };

  let showProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== 'n/a') {
      let index: number = Products.findIndex(p => p.productId.toString() === e.target.value);
      if (index !== -1) {
        //setSelectedProps({ product: Products[index], onRemove: delProductCallback });
        // Replace it with this code that sets the selected product in our local store:
        dispatch(setSelectedProduct(Products[index]));
      }
    }
  }

  return (<>
    <div className="container text-primary">
      <h1>Products</h1>
      <select data-testid='productSelect' onChange={showProduct}>
        <option value='n/a'>Select a Product</option>
        {
          Products.map(
            (prod: Product) => {
              return (<option value={prod.productId} key={prod.productId}>
                {prod.productName}
              </option>)
            }
          )
        }
      </select>
      <br />
      { // old changed from selectedProps.product.productId too...
        selectedProduct.productId !== -1
          ? <ProductDisplay {...selectedProps} />
          : null
      }
    </div>
  </>);
}

export default ProductWarehouse;