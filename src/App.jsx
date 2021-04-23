import './reset.css';
import Cards from './components/Cards/Cards';
import Play from './components/Play/Play';


function App() {
  return (
    <div className="App">
    <Play />
      <div className="cartes">
        <Cards />
      </div>
    </div>
  );
}
export default App;
