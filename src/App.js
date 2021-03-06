import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Retro Club VHS" />} />
            <Route path="/item/:id" element={<ItemDetailContainer greeting="Detalle del producto" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoria de items" />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>


        <h2>RETRO CLUB VHS</h2>
      </header>
    </div>
  );
}

export default App;
