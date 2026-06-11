import React, { useState } from "react";

export default function Card(props) {
    const [cardData, setCardData] = useState({title: 'Título', text: 'Lorem ipsum...'});
    const [isFavorite, setIsFavorite] = useState(false);

    return(
        <div className="card">
            <div>
                <h1>{props.cardData.title}</h1>
                <p>{props.cardData.director}</p>
            </div>
            <a href="#">Más info</a>
        </div>
    )
}