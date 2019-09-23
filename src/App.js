import React from 'react';
import './App.css';
import { fetchCharacters } from './services/fetchCharacters';
import CharacterList from './components/CharacterList';

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
    const { characters } = this.state
    return(
      <div>
        <header className="header">
          <h1 className="header__title">Ricky and Morty</h1>
        </header>
        <main className="main">
          <CharacterList characters={characters} />
        </main>
      </div>
    )
  }
}

export default App;
