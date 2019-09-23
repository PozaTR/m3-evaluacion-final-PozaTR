import React from 'react';
import './App.css';
import { fetchCharacters } from './services/fetchCharacters';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      findCharacter: ''
    }

    this.getCharacters = this.getCharacters.bind(this);
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

  getCharacters(event) {
    const findCharacter = event.currentTarget.value;
    console.log(findCharacter);

    this.setState({
      findCharacter: findCharacter
    })
  }

  render() {
    const { characters, findCharacter } = this.state
    return(
      <div>
        <header className="header">
          <h1 className="header__title">Ricky and Morty</h1>
        </header>
        <main className="main">
          <React.Fragment>
            <Filters getCharacters={this.getCharacters} findCharacter={findCharacter} />
            <CharacterList characters={characters} findCharacter={findCharacter}/>
          </React.Fragment>
        </main>
      </div>
    )
  }
}

export default App;
