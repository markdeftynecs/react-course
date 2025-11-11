import WarehouseHeader from './WarehouseApp/WarehouseHeader';
import ProductWarehouse from './WarehouseApp/ProductWarehouse';
//import WarehouseFooter from './WarehouseApp/WarehouseFooter';
import { siteInfo } from './WarehouseApp/DummyInventory';
import WarehouseFooter, { WarehouseFooterProps } from './WarehouseApp/WarehouseFooter';

const UIRoot = (): JSX.Element => {

  let footerProps: WarehouseFooterProps = {
    contactEmail: siteInfo.ContactEmail,
    contactName: siteInfo.ContactName
  };

  return (<>
    <WarehouseHeader />
    <ProductWarehouse />
    <WarehouseFooter {...footerProps}>
      <div>&copy;2025 {siteInfo.SiteName}</div>
    </WarehouseFooter>
  </>);
}
export default UIRoot;