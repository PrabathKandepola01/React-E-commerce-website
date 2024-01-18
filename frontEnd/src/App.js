//import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import Footer from './Componets/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatergary from './Pages/ShopCatergary';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import men_banner from './Componets/Assets/banner_mens.png'
import women_banner from './Componets/Assets/banner_women.png'
import kid_banner from './Componets/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
       <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCatergary banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCatergary banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCatergary banner={kid_banner} category="kid" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/LoginSignup' element={<LoginSignup />} />
          <Route path='/Cart' element={<Cart />} />
          
       </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
