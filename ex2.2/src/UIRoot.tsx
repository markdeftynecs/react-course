import WarehouseHeader from './WarehouseApp/WarehouseHeader';
import ProductWarehouse from './WarehouseApp/ProductWarehouse';
import WarehouseFooter from './WarehouseApp/WarehouseFooter';

const UIRoot = (): JSX.Element => {
    return (<>

        <WarehouseHeader />
        <ProductWarehouse />
        <WarehouseFooter />

    </>);
}
export default UIRoot;