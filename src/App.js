import React from 'react';
import './App.css';
import { fetchCharacters } from './services/fetchCharacters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: {}
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
        <header></header>
        <main></main>
      </div>
    )
  }
}

export default App;
