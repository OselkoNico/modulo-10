import React, { useEffect, useState } from "react";

export default function Card(props) {
    const [isFavorite, setIsFavorite] = useState(false);
    //1. useEffect: Mantiene el comportamiento de registro (logging)
    useEffect(() => {
    //Este efecto se ejecuta cada vez que 'isFavorite' cambia
    console.log(`'Nueva película favorita: ${props.cardData.title} - Estado: ${isFavorite ? 'Marcada' : 'Desmarcada'}`);
    }, [isFavorite, props.cardData.title]); //Añadimos 'props.cardData.title' para mejor contexto
    //2. Función de manejo de estado simple
    const handleFavorite = () => {
        setIsFavorite(prevIsFavorite => !prevIsFavorite);
    }
    //3. Determinamos el texto del botón basado en el estado
    const buttonText = isFavorite ? 'Desmarcar como favorito' : 'Marcar como favorito';
return(
    <div className="card">
        <div>
            <h1>
                {props.cardData.title}
                {/* Muestra el corazón lleno o vacío */}
                {isFavorite ? <span>&#9829;</span> : <span>&#9825;</span>}
            </h1>
            <p>{props.cardData.director}</p>
        </div>
            {/* 4. Utilizamos un <button> para la acción, limpio y semántico */}
        <button onClick={handleFavorite}>
                {buttonText}
        </button>
    </div>
);
}