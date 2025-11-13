import {Product} from './WarehouseTypes';
import {DummyProduct} from './DummyInventory';
import {useEffect, useCallback} from 'react';
import ProductDisplay,{ProductDisplayProps} from './ProductDisplay';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, WarehouseState} from './Redux/WarehouseStore';
import { removeProduct, fetchProducts, setSelectedProduct } from './Redux/ProductsSlice';
import {NotifyingHOC, StylingHOC} from './WarehouseHOCs';

const ProductWarehouse = ():JSX.Element => { 
  const Products:Product[] = useSelector((state:WarehouseState) => state.productSliceReducer.productsList);
  const selectedProduct:Product = useSelector((state:WarehouseState) => state.productSliceReducer.selectedProduct);

  const dispatch:AppDispatch = useDispatch();
  useEffect( () => { 
    dispatch(fetchProducts());
  },
  [dispatch]);

  const delProduct = (Id:number):void => {
    dispatch(removeProduct(Id));
    dispatch(setSelectedProduct(DummyProduct));
  };   
  const delProductCallback = useCallback(delProduct, [dispatch]);

  let selectedProps:ProductDisplayProps = {product: DummyProduct, 
                                             onRemove: delProductCallback };
  let showProduct = (e:React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value !== 'n/a')
        {
          let index:number = Products.findIndex(p => p.productId.toString() === e.target.value);
          if (index !== -1)
          {
            dispatch(setSelectedProduct(Products[index]));
          }
      }
  }  
  const NotifyingDisplay = NotifyingHOC(ProductDisplay);
  const StylingDisplay = StylingHOC(NotifyingDisplay);

  return (<>
                <div className="container text-primary">
                <h1>Products</h1>
                <select data-testid='productSelect' onChange={showProduct}>
                  <option value='n/a'>Select a Product</option>
                   {
                     Products.map(
                        (prod:Product) => {
                          return (<option value={prod.productId}  key={prod.productId}>
                                    {prod.productName} 
                                   </option>)
                        }
                      )
                    }                    
                </select>
                <br/>     
                <br /> 
                { selectedProduct.productId !== -1 ?  <StylingDisplay 
                                                       componentStyle = {{backgroundColor:'honeydew'}}
                                                       message='Product Display' 
                                                       {...selectedProps}/> : null }                
                </div>   
            </>);
}

export default ProductWarehouse;