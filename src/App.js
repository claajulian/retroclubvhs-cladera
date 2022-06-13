import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a Retro Club VHS"/>
        <h2>RETRO CLUB VHS</h2>
      </header>
    </div>
  );
}

export default App;
