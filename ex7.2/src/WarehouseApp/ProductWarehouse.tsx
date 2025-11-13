import { Product } from './WarehouseTypes';
import { DummyProduct } from './DummyInventory';
import { useEffect, useCallback, useState } from 'react';
import ProductDisplay, { ProductDisplayProps } from './ProductDisplay';
import { getProducts, deleteProduct } from './Services/ProductServices';

const ProductWarehouse = (): JSX.Element => {

  const [Products, setProducts]
    = useState<Array<Product>>([]);

  const fetchProducts = async () => {
    setProducts(await getProducts());
  }
  
  useEffect(() => {
    fetchProducts();
  }, []);

  const delProduct = (Id: number): void => {
    deleteProduct(Id);
    let index = Products.findIndex(p => Id === p.productId);
    Products.splice(index, 1);
    setSelectedProps({ product: DummyProduct, onRemove: () => { } });
  };
  const delProductCallback = useCallback(delProduct, [Products]);

  const [selectedProps, setSelectedProps] =
    useState<ProductDisplayProps>({ product: DummyProduct, onRemove: delProductCallback });

  let showProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== 'n/a') {
      let index: number = Products.findIndex(p => p.productId.toString() === e.target.value);
      if (index !== -1) {
        setSelectedProps({ product: Products[index], onRemove: delProductCallback });
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
      {selectedProps.product.productId !== -1 ? <ProductDisplay {...selectedProps} /> : null}
    </div>
  </>);
}

export default ProductWarehouse;