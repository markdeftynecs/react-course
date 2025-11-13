import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductWarehouse from './WarehouseApp/ProductWarehouse';
import WarehouseEdit from './WarehouseApp/WarehouseEdit';
import UIRoot from './UIRoot';
import WarehouseStore from './WarehouseApp/Redux/WarehouseStore';
import { Provider } from 'react-redux';

const App = ():JSX.Element => {
  return (
      <>
      <div className='App'>
      <Provider store={WarehouseStore} >
        <BrowserRouter>
          <Routes>
                 <Route path='/' element={<UIRoot /> } >
                    <Route index element={<ProductWarehouse />} />
                    <Route path='warehouse/:pid/:wid' element={<WarehouseEdit/>} />
                 </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      </div>
      </>
  );
} 

export default App;