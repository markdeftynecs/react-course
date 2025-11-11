import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductDisplay, { ProductDisplayProps } from '../ProductDisplay';
import { Products } from '../DummyInventory';

// et the Doodad product object from our dummy products, 
// pass it to the ProductDisplay component, 
// and use the render function to load the component into the screen pseudo-variable
const pdProps: ProductDisplayProps = { product: Products[2] };
render(<ProductDisplay {...pdProps} />);

// Add a description of the tests for the ProductDisplay components:
describe('ProductDisplay, passed a product, displays the product and its warehouses',

    () => {

        // uery to see if the text "Id:" appears on the screen 
        // (it should only appear on the screen as "Id: 387"  when the Doodad product is displayed)
        const pwId = screen.queryByText(/Id:/);

        // create a test that checks if the text was found
        it('is displaying a product',
            () => { expect(pwId).toBeTruthy(); }
        );

        // make sure the right product is being displayed by checking for the product number (387)
        const pwProd = screen.queryByText(/387/);
        it('is displaying the correct product', () => {
            expect(pwProd).toBeTruthy();
        });

        // check to see if the right number of warehouses is being displayed 
        // by counting the number of times "quantity on hand" is being displayed
        const pwWarehouses = screen.queryAllByText('quantity on hand', { exact: false });
        it('is displaying four warehouses and total quantity', () => {
            expect(pwWarehouses).toHaveLength(5);
        });


    });

