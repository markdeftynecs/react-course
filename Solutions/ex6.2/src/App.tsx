import './App.css';
import UIRoot from './UIRoot';
import { BrowserRouter, Routes, Route }
            from 'react-router-dom';
import WarehouseEdit from './WarehouseApp/WarehouseEdit';
import ProductWarehouse from './WarehouseApp/ProductWarehouse';

const App = ():JSX.Element => {
  return (
      <> 
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<UIRoot />} >
                <Route index
                    element={<ProductWarehouse />} />
                <Route path="warehouse/:pid/:wid"
                    element={<WarehouseEdit />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>  
      </>
  );
} 

export default App;