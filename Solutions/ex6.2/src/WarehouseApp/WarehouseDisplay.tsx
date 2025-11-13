import {Warehouse} from './WarehouseTypes';
import { Link } from 'react-router-dom';

const WarehouseDisplay = ({warehouse}:WarehouseDisplayProps):JSX.Element => {
    const path = `/warehouse/${warehouse.productId}/${warehouse.warehouseId}`;
    return (<>
                <Link to={path}>
                    <img alt='Edit Icon'
                         src='./editButton.png'>
                    </img>
                </Link>
                <label className="text-secondary">{warehouse.warehouseName}-</label>  
                <label className="text-secondary">Quantity on hand:&nbsp;</label>{warehouse.qoh}
                <br/>
            </>);
}

export type WarehouseDisplayProps = {
    warehouse:Warehouse;
}

export default WarehouseDisplay;