import { render, screen, fireEvent } from '@testing-library/react';

import ProductDisplay, {ProductDisplayProps} from '../ProductDisplay';
import WarehouseDisplay from '../WarehouseDisplay';
import {Products} from '../DummyInventory';

let pdProps: ProductDisplayProps = {product:Products[2]};
render(<ProductDisplay {...pdProps}/>);

const pwId =  screen.queryByText(/Id/);
describe('ProductDisplay, passed a product, displays the product', () => {
    it('is displaying a product', () => {
        expect(pwId).toBeTruthy();
    });
    
    const pwProd =  screen.queryByText('387');
    it('is displaying the correct product', () => {
        expect(pwId).toBeTruthy();
    });

    const pwWarehouses = screen.queryAllByText('quantity on hand',
            {exact: false});
    it ('is displaying four warehouses and total quantity', () => {
        expect(pwWarehouses).toHaveLength(5);
    });
});
