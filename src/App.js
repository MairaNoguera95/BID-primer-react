import logo from './logo.svg';
import './App.css';
import Listado from './components/Listado';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';

function App() {
  return (
    <div className="App">
    
      <Titulo/>
      <Subtitulo/>
      <Listado/>
    </div>
  );
}

export default App;
