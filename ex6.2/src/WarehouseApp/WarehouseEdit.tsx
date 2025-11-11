import {Warehouse} from './WarehouseTypes';
import {useState, FormEvent, useEffect, ChangeEvent} from 'react';
import { DummyWarehouse } from './DummyInventory';

const WarehouseEdit = ( ):JSX.Element => {
    const [wh, setWarehouse] = useState<Warehouse>(DummyWarehouse); 
    const [errMessage, setErrMessage] = useState<string>("");

    useEffect( () =>  {if (wh.qoh < 0)
     {
       setErrMessage("Quantity on hand can not be less than zero.")
     }},
     [wh.qoh]
   );

    const onSubmitWarehouse = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const onChange = (e:ChangeEvent<HTMLInputElement>) =>
    {
      let value: string | boolean;
      if (e.currentTarget.type === 'checkbox')
      {
        value = e.currentTarget.checked;
      }
      else
      {
        value = e.currentTarget.value;
      }
      setWarehouse( {...wh, [e.currentTarget.name]: value} );
    }
    
    const onChangeQoh = (e:ChangeEvent<HTMLInputElement>) =>  {
      let testQoh:any = e.currentTarget.value;      
      let errMsg:string = "";

      if (isNaN(testQoh)) {
        errMsg = "Quantity on Hand must be a number";
      }
      setWarehouse({...wh, qoh: testQoh});
    
      if (errMsg === "") {
          if (testQoh === "") {
            errMsg = "Quantity on Hand can not be blank";
          }
     }
     if (errMsg === "") {
      const tempQoh:number = +e.currentTarget.value;
      if (tempQoh < 0) {
        errMsg = "Quantity on Hand can not be negative";
      }
     }
     setErrMessage(errMsg);
    };
        
    return (<>

                 <h1> Edit Warehouse: {wh.warehouseId} </h1>

                <form onSubmit={onSubmitWarehouse}>
                    <fieldset>
                        <div>
                            <label htmlFor='inpName'>Warehouse Name:</label>
                            <input id='inpName'
                                    value={wh.warehouseName}
                                    name='warehouseName'
                                    onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor='inpInternational'> Accepts international shipments?: </label>
                            <input id='inpInternational'
                                    checked={wh.international} 
                                    type='checkbox' 
                                    name='international'
                                    onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor='inpQoh'>Quantity on Hand: </label>
                            <input id='inpQoh'
                                    value={wh.qoh}
                                    name='qoh'
                                    onChange={onChangeQoh} />
                        </div> 
                        <br/>
                        <button>Save Changes</button>   
                    </fieldset>
                </form>
                {errMessage !== "" ? errMessage : ""}
            </>);
}

export type WarehouseEditProps = {
    warehouse:Warehouse;
}

export default WarehouseEdit;