import { Warehouse } from './WarehouseTypes';

import { DummyWarehouse } from './DummyInventory';

const WarehouseEdit = ({ warehouse = DummyWarehouse }: WarehouseEditProps): JSX.Element => {
    return (

        <>

            <h1> Edit Warehouse: {warehouse.warehouseId} </h1>

        </>);
}



export type WarehouseEditProps = {
    warehouse?: Warehouse;
}



export default WarehouseEdit;