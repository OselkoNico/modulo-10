import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import Footer from './component/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //Ejecuta la carga de datos solo una vez
    setTimeout(() => {
      setMovies([
        {id: 1, title: 'Pulp Fiction', director: 'Quentin Tarantino'},
    {id: 2, title: 'Regreso el Futuro', director: 'Robert Zemeckis'},
    {id: 3, title: 'El Padrino', director: 'Francis Ford Coppola'},
      ])
    }, 2000)
  }, []) //Array de dependencias vacío

  return (
    <>
      <div className="container">
        {
          movies.map(elem => {
            return <Card key={elem.id} cardData={elem} />
          })
        }
      </div>
      <Footer />
    </>
  );
}

export default App;