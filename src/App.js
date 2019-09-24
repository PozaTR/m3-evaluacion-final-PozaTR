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
      gender: 'All',
      species: 'All',
      episodes: [],
      status: 'All',
      origin: 'All'
    }

    this.getCharacters = this.getCharacters.bind(this);
    this.searchByGender = this.searchByGender.bind(this);
    this.searchBySpecies = this.searchBySpecies.bind(this);
    this.searchByEpisodes = this.searchByEpisodes.bind(this);
    this.searchByStatus = this.searchByStatus.bind(this);
    this.serchByOrigin = this.serchByOrigin.bind(this);
  }

  componentDidMount() {
    fetchCharacters()
      .then(data => {
        this.setState({
          characters: data.results,
        });
      })
  }

  serchByOrigin(event) {
    const newOrigin = event.currentTarget.value;

    this.setState({
      origin: newOrigin
    })
  }

  searchByStatus(event) {
    const newStatus = event.currentTarget.value;

    this.setState({
      status: newStatus
    })
  }

  getCharacters(event) {
    const findCharacter = event.currentTarget.value;

    this.setState({
      findCharacter : findCharacter
    })
  }

  searchBySpecies(event) {
    const newSpecies = event.currentTarget.value;

    this.setState({
      species: newSpecies
    })
  }

  searchByGender(event) {
    const newGender = event.currentTarget.value;

    this.setState({
      gender: newGender
    })
  }

  searchByEpisodes(event) {
    const countEpisodes = event.currentTarget.value
    const isChecked = event.currentTarget.checked;

    this.setState((prevState) => {
      if(isChecked) {
        prevState.episodes.push(countEpisodes)
      }else {
        const findEpisode = prevState.episodes.findIndex(episode => episode === countEpisodes)
        prevState.episodes.splice(findEpisode, 1)
      }
      return {
        episodes: prevState.episodes
      }

    })
  }

  render() {
    const { characters, findCharacter, gender, species, episodes, status, origin } = this.state
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
                <Filters match={RouterProps.match}
                  getCharacters={this.getCharacters}
                  findCharacter={findCharacter}
                  searchByGender={this.searchByGender}
                  searchBySpecies={this.searchBySpecies}
                  searchByEpisodes={this.searchByEpisodes}
                  searchByStatus={this.searchByStatus} 
                  serchByOrigin={this.serchByOrigin} />
                <CharacterList 
                  match={RouterProps.match} 
                  characters={characters} 
                  findCharacter={findCharacter} 
                  gender={gender} 
                  species={species}
                  episodes={episodes}
                  status={status}
                  origin={origin}
                  />
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
