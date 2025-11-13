import {useParams} from 'react-router-dom';
import  {useState, FormEvent, ChangeEvent} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, WarehouseState} from './Redux/WarehouseStore';
import { updWarehouse } from './Redux/WarehousesSlice';
import { Warehouse } from './WarehouseTypes';

const WarehouseEdit = ():JSX.Element => {
    type urlParms = 'wid' | 'pid';
  
    const { wid, pid } = useParams<urlParms>();
    const Products = useSelector((state:WarehouseState) => state.productSliceReducer.productsList);
    const dispatch:AppDispatch = useDispatch();

    const prodIndex:number = Products.findIndex(p => p.productId.toString() === pid);
    const whIndex:number = Products[prodIndex].warehouses.findIndex(w => w.warehouseId.toString() === wid);
    const [wh, setWarehouse] = useState(Products[prodIndex].warehouses[whIndex]);

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
      let value: string | boolean;  
      if (e.currentTarget.type === 'checkbox')
      {  
         value = e.currentTarget.checked;  
      }  
      else  
      {  
         value = e.currentTarget.value;  
      }
      setWarehouse({...wh,  
                   [e.currentTarget.name]: value})
  }

    const onChangeQoh = (e:ChangeEvent<HTMLInputElement>) =>  {
      const tempQoh:number = +e.currentTarget.value;
      if (tempQoh >= 0) {
        setWarehouse({...wh, qoh: tempQoh});
      }
    };

    const onSubmitWarehouse = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(updWarehouse(wh));
    };
    
   return(<>
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
  warehouse:Warehouse;
}

export default WarehouseEdit;