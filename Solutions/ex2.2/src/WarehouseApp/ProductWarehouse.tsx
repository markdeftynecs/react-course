import {Product} from './WarehouseTypes';
import {Products} from './DummyInventory';

const ProductWarehouse = ():JSX.Element => {
    return (<>
                <div className="container text-primary">
                <h2>Products</h2>
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

                </div>   
            </>);
}

export default ProductWarehouse;