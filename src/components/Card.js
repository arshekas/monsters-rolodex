import React from 'react'
import './Card.css'

function Card({monster}) {
    return (
        <div className="card">
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster"/>
            <h2>{monster.name}</h2>
            <b>{monster.email}</b>
        </div>
    )
}

export default Card
