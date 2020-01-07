import React from 'react';
import './List.css';

function Card(props) {
    return (
        <section className='Card'>
            <button type='button' onClick={() => props.deleteCard(props.listIdx, props.cardIdx)}>delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </section>
    )
}

export default Card