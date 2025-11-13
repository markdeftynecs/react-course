import { Warehouse } from './WarehouseTypes';
import { useParams } from 'react-router-dom';
import { useState, FormEvent, ChangeEvent } from 'react';
// 12. And, since we're no longer using our dummy data, delete this import statement:
// import { Products } from './DummyInventory';
// 11. 
import { useSelector, useDispatch } from 'react-redux';
import { WarehouseState, AppDispatch } from './Redux/WarehouseStore';
import { updWarehouse } from './Redux/WarehousesSlice';


const WarehouseEdit = (): JSX.Element => {
  type urlParms = 'wid' | 'pid';

  // 13. to get our list of products from the local store and set up the dispatch function:
  const Products = useSelector((state: WarehouseState) => state.productSliceReducer.productsList);
  const dispatch: AppDispatch = useDispatch();

  const { wid, pid } = useParams<urlParms>();
  const prodIndex: number = Products.findIndex(p => p.productId.toString() === pid);
  const whIndex: number = Products[prodIndex].warehouses.findIndex(w => w.warehouseId.toString() === wid);
  const [wh, setWarehouse] = useState(Products[prodIndex].warehouses[whIndex]);


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value: string | boolean;
    if (e.currentTarget.type === 'checkbox') {
      value = e.currentTarget.checked;
    }
    else {
      value = e.currentTarget.value;
    }
    setWarehouse({
      ...wh,
      [e.currentTarget.name]: value
    })
  }

  const onChangeQoh = (e: ChangeEvent<HTMLInputElement>) => {
    const tempQoh: number = +e.currentTarget.value;
    if (tempQoh >= 0) {
      setWarehouse({ ...wh, qoh: tempQoh });
    }
  };

  const onSubmitWarehouse = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 14. finally, we'll enhance our onSubmitWarehouse function with this bolded code 
    // that calls our reducer's updWarehouse function through the dispatch function:
    dispatch(updWarehouse(wh));
  };

/*
15. Completion Overview.
Save your work and see if you can
Update your warehouse on the edit warehouse page and click Save Changes
Click the browser's Back button, use <Ctrl>-Refresh Button to refresh your page, and select the product to see your changes

It would be better if, after we changed the Warehouse information, that change was displayed on our home page
 without having to refresh the page. 
 The problem is that our home page is displaying selectedProduct and, currently, 
 we don’t update selectedProduct when we update the warehouse.
  We can fix that by adding some code to the ProductSlice to update selectedProduct as part of updWarehouse.
	We'll add an updWarehouse reducer to the ProductSlice. 
  Fortunately, we combined our reducers in our customer store, 
  so all the updWarehouse reducers in all of our slices will be called whenever we dispatch updWarehouse.

  ... ProductsSlice.tsx

*/


  return (<>
    <h1>Edit Warehouse {wh.warehouseName}</h1>
    <form onSubmit={onSubmitWarehouse}>
      <fieldset>
        <div>
          <label htmlFor='inpName'>Warehouse Name:</label>
          <input id='inpName' value={wh.warehouseName} data-testid='warehouseName'
            name="warehouseName"
            onChange={onChange} />
        </div>

        <div>
          <label htmlFor='international'>Accepts international shipments?: </label>
          <input id='inpInternational' type='checkbox' data-testid='int'
            name="international"
            checked={wh.international}
            onChange={onChange} />
        </div>

        <div>
          <label htmlFor='inpQoh'>Quantity on Hand: </label>
          <input id='inpQoh' value={wh.qoh} data-testid='qoh'
            name='qoh'
            onChange={onChangeQoh} />
        </div>
        <button data-testid='submit'>Save Changes</button>
      </fieldset>
    </form>
  </>);
}
export type WarehouseEditProps = {

  warehouse: Warehouse;

}
export default WarehouseEdit;