import React, { useEffect, useState } from "react";

export default function Card(props) {
    //1. Hook para manejar el estado de favorito
    const [isFavorite, setIsFavorite] = useState(false);

    //2. Función para alternar el estado (marcar/desmarcar)
    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
return(
    <div className="card">
        <div>
            <h1>
                {props.cardData.title}
                {/* 3. Muestra el corazón lleno o vacío */}
                {isFavorite ? <span>&#9829;</span> : <span>&#9825;</span>}
            </h1>
            <p>{props.cardData.director}</p>
        </div>
        {
            isFavorite ?
                <a onClick={handleFavorite} href="#">Desmarcar como favorito</a>
            :
                <a onClick={handleFavorite} href="#">Marcar como favorito</a>
        }
    </div>
);
}