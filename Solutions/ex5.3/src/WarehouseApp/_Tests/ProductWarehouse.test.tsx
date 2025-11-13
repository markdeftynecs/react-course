import { render, screen, fireEvent } from '@testing-library/react';
import ProductWarehouse from '../ProductWarehouse';
import {describe, it, expect} from 'vitest';

render(<ProductWarehouse />);

describe(`ProductWarehouse, when a product is selected, 
    displays ProductDisplay, passing the right product`,
    () => {
      const pdRefNotFound = screen.queryByText(/Product:/);
      it ('does not display a product when none is selected', 
           () => { expect(pdRefNotFound).toBeFalsy(); });
      
      const pwRef = screen.getByTestId('productSelect')
      fireEvent.change(pwRef, {
                       target: { value: '387' }
      });

      const pdRefs = screen.queryAllByText(/Product:/);
      it ('displays a product when one is selected', 
         () => {expect(pdRefs).toHaveLength(1);
      });

      const prod = screen.queryByText('Product: Doodad');
      it ('displays the right product when one is selected', 
        () => { expect(prod).toBeTruthy(); });
});