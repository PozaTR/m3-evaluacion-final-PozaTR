import React from 'react';
import './App.css';
import { fetchCharacters } from './services/fetchCharacters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    fetchCharacters()
    .then(data => {
      console.log(data.results)
      this.setState({
        characters: data.results
      });
    })
    }

  render() {
    return(
      <div>
        <header className="header">
          <h1 className="header__title">Ricky and Morty</h1>
        </header>
        <main className="main">
          <ul className="main__list">
            {this.state.characters.map(character =>
              <li key={character.id} className="main__list__element">
                <h2 className="main__list__element__name">{character.name}</h2>
                <div className="main__list__element__image-container">
                  <img classname="main__list__element__image" src={character.image} alt={character.name}/>
                </div>
                <p className="main__list__element__species">{character.species}</p>
              </li>
              )}
          </ul>
        </main>
      </div>
    )
  }
}

export default App;
