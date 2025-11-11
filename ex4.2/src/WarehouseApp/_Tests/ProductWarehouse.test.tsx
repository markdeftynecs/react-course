import { render, screen, fireEvent } from '@testing-library/react';
import ProductWarehouse from '../ProductWarehouse';

import { describe, it, expect } from "vitest";

//load the ProductWarehouse component into screen
render(<ProductWarehouse />);


describe(`ProductWarehouse, when a product is selected, 
                      displays ProductDisplay, passing the right product`,
    () => {

        // make sure that -- before we select a product -- that no product is displayed. 
        // We'll do that by looking for the Product: heading:
        const pdRefNotFound = screen.queryByText(/Product:/);
        it('does not display a product when none is selected',
            () => { expect(pdRefNotFound).toBeFalsy(); }
        );

        // check to see if selecting a product causes a product to be displayed.

        // mimic a user selecting a product from the dropdown list by firing a change event 
        // on the select element, passing the value 387 to whatever function is tied to the event
        const pwRef = screen.getByTestId('productSelect');

        //console.log("pwRef",{ target: pwRef})

        fireEvent.change(pwRef, {
            target: { value: '387' }
        });

        // if a ProductDisplay has now been added to the display. We'll try to find the 
        // Product: heading and test to make sure that there is one (and only one) present
        const pdRefs = screen.queryAllByText(/Product:/);
        it('displays a product when one is selected',
            () => { expect(pdRefs).toHaveLength(1); }
        );

        // make sure that the single product being displayed is the right one
        const prod = screen.queryByText('Product: Doodad');
        it('displays the right product when one is selected',
            () => { expect(prod).toBeTruthy(); }
        );



    });

