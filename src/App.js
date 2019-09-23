import React from 'react';
import './App.scss';
import { fetchCharacters } from './services/fetchCharacters';
import { Route, Switch } from 'react-router-dom';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      findCharacter: '',
    }

    this.getCharacters = this.getCharacters.bind(this);
  }

  componentDidMount() {
    fetchCharacters()
    .then(data => {
      this.setState({
        characters: data.results,
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
    const { characters, findCharacter} = this.state
    return(
      <div>
        <header className="header">
          <h1 className="header__title">Ricky and Morty</h1>
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/" render={RouterProps => (
              <React.Fragment>
                <Filters match={RouterProps.match} getCharacters={this.getCharacters} findCharacter={findCharacter} />
                <CharacterList match={RouterProps.match} characters={characters} findCharacter={findCharacter}/>
             </React.Fragment>
            )}>
            </Route>
           <Route path="/detail/:characterId" render={RouterProps => (
              <CharacterDetail match={RouterProps.match} characters={characters} />
            )}>
           </Route>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
