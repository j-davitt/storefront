import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from './Components/Products';
import Storefront from './Components/Storefront';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Storefront />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
