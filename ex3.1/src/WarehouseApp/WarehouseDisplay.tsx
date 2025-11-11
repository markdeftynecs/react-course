import { Warehouse } from './WarehouseTypes';

const WarehouseDisplay = ({ warehouse }: WarehouseDisplayProps): JSX.Element => {

    return (<>
        <label className='text-secondary'>
            {warehouse.warehouseName}
        </label>
        -
        <label className='text-secondary'>
            Quantity on hand:&nbsp;
        </label>
        {warehouse.qoh}
        <br />
    </>);
}

export type WarehouseDisplayProps = {
    warehouse: Warehouse
};

export default WarehouseDisplay;