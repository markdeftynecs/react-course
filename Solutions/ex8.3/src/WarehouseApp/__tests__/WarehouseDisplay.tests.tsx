import { shallow } from 'enzyme';
import WarehouseDisplay, {WarehouseDisplayProps} from '../WarehouseDisplay';
import {Products} from '../DummyInventory';

let whProps: WarehouseDisplayProps = {warehouse:Products[2].warehouses[1]};
const whRef = shallow(<WarehouseDisplay {...whProps} />);

describe('WarehouseDisplay, passed a warehouse, displays the warehouse as a link to WarehouseEdit', () => {
    it('creates a WarehouseDisplay without crashing', () => {
        expect(whRef).toBeTruthy();
    });

    it('is displaying the correct warehouse', () => {
        expect(whRef.find('[data-testid="warehouseName"]').first().text()).toContain('Great Britain');
    });

    it ('has the right href attribute on the link', () => {
        expect(whRef.find('[data-testid="warehouseLink"]').first().prop('to')).toContain('/warehouse/387/4');
    });
});
