import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import Footer from './component/Footer';

function App() {

  const movies = [
    {id: 1, title: 'Pulp Fiction', director: 'Quentin Tarantino'},
    {id: 2, title: 'Regreso el Futuro', director: 'Robert Zemeckis'},
    {id: 3, title: 'El Padrino', director: 'Francis Ford Coppola'},
  ]

  return (
    <>
      <div className="container">
        {
          movies.map(elem => {
            return <Card cardData={elem} />
          })
        }
      </div>
      <Footer />
    </>
  );
}

export default App;
