import {Product, Warehouse} from './WarehouseTypes';
import {DummyWarehouse} from './DummyInventory';
import WarehouseDisplay, {WarehouseDisplayProps} from './WarehouseDisplay';
import { useEffect } from 'react';
// Add these import statements to add useSelector and our selector types(WarehouseState) to the component:
import {useSelector} from 'react-redux';
import {WarehouseState} from './Redux/WarehouseStore';


const ProductDisplay = ({product, onRemove}:ProductDisplayProps):JSX.Element => {
  let totalQoh: number = 0;
  // to pull the selectedProduct from our local store
const selectedProduct:Product = useSelector(   (state:WarehouseState) => state.productSliceReducer.selectedProduct);

  useEffect( () => {
    document.title = 'Product: ' + selectedProduct.productName;    
   }, [selectedProduct.productName]);

   let delDate:Date;
   if (typeof(selectedProduct.lastDelivery) != 'undefined')
   {
     delDate = new Date(selectedProduct.lastDelivery.toString());
   }
   else
   {
     delDate = new Date();
   }
  let wProps: WarehouseDisplayProps = {warehouse: DummyWarehouse};
  return (<>
              <h3 data-testid='productHeading'>Product: {selectedProduct.productName}</h3>
              <label className="text-secondary">Id:</label>  {selectedProduct.productId}
              <br/>
              <label className="text-secondary">Last Delivery:</label> {
                delDate.toLocaleDateString(navigator.language)}
              <br/>
              <h4>Warehouses</h4>
              {
                selectedProduct.warehouses.map((w:Warehouse) => {
                  totalQoh += w.qoh;
                  wProps.warehouse = w;                
                  return ( <WarehouseDisplay {...wProps} key={w.warehouseId}/> )
                })                
              }   
              <label className="text-secondary">Total Quantity on Hand:&nbsp;</label>{totalQoh}
              <br />
              <button onClick={ () => onRemove(selectedProduct.productId) } >
                  <img src='deleteButton.png' alt='Delete Product Button' /> 
                  Delete {selectedProduct.productName}
              </button>
            </>
         );
}

export type ProductDisplayProps = {
  product: Product,
  onRemove: (id:number) => void
}

export default ProductDisplay;