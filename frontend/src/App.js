import './App.css';
import { BrowserRouter, Route, Routes, useNavigate, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';



function App() {

  // const navigate = useNavigate();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Home />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path="*"  element = {<Navigate to= '/not-found' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;