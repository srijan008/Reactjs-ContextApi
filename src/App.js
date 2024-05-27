import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';
function App() {

  return (
    <div className="App">
      <Item name="MacBook Pro" price = {10000}/>
      <Item name="Pendrive" price = {1000}/>
      <Item name="Mobile" price = {3000}/>
      <Cart/>
    </div>
  );
}

export default App;
