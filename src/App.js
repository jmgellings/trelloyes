import React, { Component } from 'react';
import List from './List'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: this.props.store
    }
  }
  deleteCard = (listIdx, cardIdx) => {
    const newStore = this.state.store;
    newStore.lists[listIdx].cardIds.splice(cardIdx,1)
    this.setState({store: newStore})
  }
  newRandomCard = (listIdx) => {
    console.log('add new card?', listIdx);
    const newStore = this.state.store;
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    newStore.allCards[id] = {
      id: id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum'
    }
    newStore.lists[listIdx].cardIds.push(id);
    this.setState({
      store: newStore
    })
  }
  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.store.lists.map((list,idx) => (
            <List
              listIdx={idx}
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.store.allCards[id])
              }
              deleteCard={this.deleteCard}
              newRandomCard={this.newRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}