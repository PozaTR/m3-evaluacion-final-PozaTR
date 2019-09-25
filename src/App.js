import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './images/Rick_and_Morty_-_logo.png';
import './App.scss';
import { fetchCharacters } from './services/fetchCharacters';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      findCharacter: '',
      gender: 'All'
    }

    this.getCharacters = this.getCharacters.bind(this);
    this.getByGender = this.getByGender.bind(this);
  }

  componentDidMount() {
    fetchCharacters()
      .then(data => {
        this.setState({
          characters: data.results,
        });
      })
  }

  getByGender(event) {
    const newGender = event.currentTarget.value;

    this.setState({
      gender: newGender
    })
  }

  getCharacters(event) {
    const findCharacter = event.currentTarget.value;

    this.setState({
      findCharacter: findCharacter
    })
  }

  render() {
    const { characters, findCharacter, gender } = this.state
    return (
      <div>
        <header className="header">
          <h1 className="header__title">Rick and Morty</h1>
          <img className="header__logo" src={logo} alt="logo Rick and Morty" />
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/" render={RouterProps => (
              <React.Fragment>
                <Filters match={RouterProps.match} getCharacters={this.getCharacters} findCharacter={findCharacter} getByGender={this.getByGender} />
                <CharacterList match={RouterProps.match} characters={characters} findCharacter={findCharacter} gender={gender} />
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
