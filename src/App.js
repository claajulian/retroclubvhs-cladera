import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {/* <ItemListContainer greeting="Bienvenidos a Retro Club VHS"/> */}

        <ItemDetailContainer greeting="Detalle del producto"/>
        <h2>RETRO CLUB VHS</h2>
      </header>
    </div>
  );
}

export default App;
