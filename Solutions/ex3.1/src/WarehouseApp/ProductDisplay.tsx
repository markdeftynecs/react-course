import {Product} from './WarehouseTypes';
import {DummyWarehouse} from './DummyInventory';
import WarehouseDisplay, {WarehouseDisplayProps} from './WarehouseDisplay';

const ProductDisplay = ({product}:ProductDisplayProps):JSX.Element => { 
    let totalQoh: number = 0;
    let wProps: WarehouseDisplayProps = {warehouse: DummyWarehouse};

    return (<>
              <h3>Product: {product.productName}</h3>
              <label className="text-secondary">Id:</label> {product.productId}
              <br/>
              <label className="text-secondary">Last Delivery:</label> {product.lastDelivery?.toString()}
              <br/>
              <h4>Warehouses</h4>
              {
                product.warehouses.map(w => {
                  totalQoh += w.qoh;
                  wProps.warehouse = w;
                  return ( <WarehouseDisplay {...wProps}/> );
                })
              }           
              <label className="text-secondary">Total Quantity on Hand:&nbsp;</label>{totalQoh}
            </>
         );
}

export type ProductDisplayProps = {
  product: Product
}

export default ProductDisplay;