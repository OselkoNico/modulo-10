import React, { useState } from "react";

export default function Card() {
    const [cardData, setCardData] = useState({title: 'Título', text: 'Lorem ipsum...'});
    const [isFavorite, setIsFavorite] = useState(false);

    return(
        <div className="card">
            <div>
                <h1>{cardData.title}</h1>
                <p>{cardData.text}</p>
            </div>
            <a href="#">Más info</a>
        </div>
    )
}