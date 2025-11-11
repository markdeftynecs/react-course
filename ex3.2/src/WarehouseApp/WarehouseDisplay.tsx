import {Warehouse} from './WarehouseTypes';

const WarehouseDisplay = ({warehouse}:WarehouseDisplayProps) => {
    return (<>
                <label className="text-secondary">{warehouse.warehouseName}</label>-
                <label className="text-secondry">Quantity on hand:&nbsp;</label>{warehouse.qoh}
                <br/>
            </>);
}
export type WarehouseDisplayProps = {
    warehouse:Warehouse;
    itemKey: number;
}

export default WarehouseDisplay;