import { useState, useEffect } from "react";
import './App.css'
import type User from "./UserInterface";

function App(){
  const [user, setUser] = useState<User>({
    name: '',
    surname: '',
    dob: null
  })
  useEffect(() => {
    setUser({
      name: 'Juan',
      surname: 'Pérez',
      dob: new Date(1980, 0, 1)
    })
  }, [])
  const handleFormatDate = (dob: Date | null): string => {
    if(dob !== null) {
      return dob.getDate()+ '/' + (dob.getMonth()+1) + '/' + dob.getFullYear();
    } else {
      return '';
    }
  }
  return(
    <div className="App">
      <h1>Usuario</h1>
      <p>Nombre {user.name}</p>
      <p>Apellidos {user.surname}</p>
      <p>Fecha de nacimiento {handleFormatDate(user.dob)}</p>
    </div>
  )
}

export default App;