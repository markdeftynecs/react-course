import { render, screen } from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import ProductDisplay, {ProductDisplayProps}
                 from '../ProductDisplay';
import {Products} from '../DummyInventory';

const pdProps: ProductDisplayProps = {product:Products[2]};
render( <ProductDisplay {...pdProps} /> );
describe('ProductDisplay, passed a product, displays the product and its warehouses',
    () => {
        const pwId =  screen.queryByText(/Id:/);
        it('is displaying a product',
            ()=> { expect(pwId).toBeTruthy();  }   
     ); 

    const pwWarehouses = screen.queryAllByText('quantity on hand',
                                                 {exact: false});
    it ('is displaying four warehouses and total quantity', () => {
        expect(pwWarehouses).toHaveLength(5);
    });     
    
});