import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/commons/Navbar';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import ShopContextProvider from './context/ShopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
