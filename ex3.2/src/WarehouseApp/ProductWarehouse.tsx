import { Product } from './WarehouseTypes';
//import {Products} from './DummyInventory';
import { Products, DummyProduct } from './DummyInventory';
import ProductDisplay, { ProductDisplayProps } from './ProductDisplay';
import { useState } from 'react';


const ProductWarehouse = (): JSX.Element => {
  //let pdProps:ProductDisplayProps = {product: Products[0]};
  const [selectedProps, setSelectedProps] =
    useState<ProductDisplayProps>({ product: DummyProduct });

  const showProduct =
    (e: React.ChangeEvent<HTMLSelectElement>) => {

      console.log("e", {e, target: e.target, value: e.target.value });

      if (e.target.value !== 'n/a') {

        let index: number = Products.findIndex(
          p => p.productId.toString() === e.target.value);

        if (index !== -1) {
          setSelectedProps({ product: Products[index] });
        } 

      }

    };


  return (<>
    <div className="container text-primary">
      <h1>Products</h1>
      <select onChange={showProduct}>

        <option value='n/a'>Select a Product</option>
        {
          Products.map(
            (prod: Product, i) => {
              return (<option key={i} value={prod.productId} >
                {prod.productName}
              </option>)
            }
          )
        }
      </select>

      <br />

      {
        selectedProps.product.productId !== -1
          ? <ProductDisplay {...selectedProps} />
          : null
      }

    </div>
  </>);
}

export default ProductWarehouse;