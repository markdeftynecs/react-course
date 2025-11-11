import { Product, Warehouse } from './WarehouseTypes';
import { DummyWarehouse } from './DummyInventory';
import WarehouseDisplay, { WarehouseDisplayProps } from './WarehouseDisplay';

const ProductDisplay = ({ product }: ProductDisplayProps): JSX.Element => {
  let totalQoh: number = 0;
  let wProps: WarehouseDisplayProps = { warehouse: DummyWarehouse , itemKey: -1};

  return (<>
    <h3>Product: {product.productName}</h3>
    <label className="text-secondary">Id:</label> {product.productId}
    <br />
    <label className="text-secondary">Last Delivery:</label> {product.lastDelivery?.toString()}
    <br />
    <h4>Warehouses</h4>
    {
      product.warehouses.map((w: Warehouse, itemKey) => {
        totalQoh += w.qoh;
        wProps.warehouse = w;
        return (

          //WarehouseDisplay is actually a WarehouseDisplayProps TYPE containing a Warehouse
          <WarehouseDisplay
            //key={w.warehouseId}   // unique key
           // key={key}   // OR unique index
            itemKey = {itemKey}
            warehouse={w}         // pass warehouse directly
          />
        );
        //return ( <WarehouseDisplay {...wProps}/> );
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