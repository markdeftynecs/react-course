import { fireEvent, render, screen } from '@testing-library/react';
import WarehouseEdit from '../WarehouseEdit';
import { MemoryRouter, Routes, Route } from 'react-router';

describe('WarehouseEdit, when data is entered, updates the warehouse', () => {
   
    it('displays the right warehouse and accepts updates', () => {      
      render(
        <MemoryRouter initialEntries={['/warehouse/387/5']}>
          <Routes>
            <Route path='/warehouse/:pid/:wid' element={<WarehouseEdit />} />
          </Routes> 
        </MemoryRouter> 
      );
      
      const inpName = screen.getByTestId('warehouseName') as HTMLInputElement;
      expect(inpName.value).toEqual('Scandanavia');        
    
      const inpInt  = screen.getByTestId('int');
      const inpQoh = screen.getByTestId('qoh') as HTMLInputElement;
      const butSubmit = screen.getByTestId('submit');

      fireEvent.change(inpName, {target: {value: 'France'}});
      fireEvent.change(inpQoh, {target: {value: '300'}});
      fireEvent.change(inpInt, {target: {checked: false}});      
      fireEvent.click(butSubmit)

      expect(inpName.value).toEqual('France');
      expect(inpQoh.value).toEqual('300');
      expect(inpInt).not.toBeChecked();
    });
});