import React from 'react';
import './List.css';
import Card from './Card.js';

function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card, cardIdx) => 
          <Card
            listIdx={props.listIdx}
            cardIdx={cardIdx}
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            deleteCard={props.deleteCard}
          />
        )}
        <button type='button' className='List-add-button' onClick={() => props.newRandomCard(props.listIdx)}>
          + Add Random card
        </button>
      </div>
    </section>
  )
}

export default List