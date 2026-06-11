import logo from './logo.svg';
import './App.css';

function App() {
  let userName = "Pilar";

  return (
    <div className="App">
      {
        userName !== null
        ?
          <p>Bienvenid@ {userName}</p>
        :
          <p>Por favor, inicie sesión</p>
      }
    </div>
  )
}

export default App;
