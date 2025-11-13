import {Product} from './WarehouseTypes';
import {Products} from './DummyInventory';
import ProductDisplay,{ProductDisplayProps} from './ProductDisplay';

const ProductWarehouse = ():JSX.Element => {
    let pdProps:ProductDisplayProps = {product: Products[0]};
    
    return (<>
                <div className="container text-primary">
                <h1>Products</h1>
                <select>
                  <option value='n/a'>Select a Product</option>
                   {
                     Products.map(
                        (prod:Product) => {
                          return (<option value={prod.productId} > 
                                    {prod.productName} 
                                   </option>)
                        }
                      )
                    }                    
                </select>
                <br/>
                <ProductDisplay {...pdProps} />                
                </div>   
            </>);
}

export default ProductWarehouse;