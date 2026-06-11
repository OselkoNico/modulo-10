import logo from './logo.svg';
import './App.css';
import Card from './component/Cards';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <div className="container">
          <h1>Bienvenidos a nuestra aplicación</h1>
          <Card />
          <Card />
      </div>
      <Footer />
    </>
  );
}

export default App;
