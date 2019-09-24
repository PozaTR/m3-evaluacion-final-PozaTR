import React from 'react';
import './CharacterList.scss';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = props => {
  const { characters, findCharacter, gender, species, episodes, status, origin} = props
  return (
    <ol className="main__list">
      {characters
        .filter(myCharacter => myCharacter.name.toUpperCase().includes(findCharacter.toUpperCase()))
        .filter(character => origin === 'All' || character.origin.name === origin)
        .filter(character => {
          if(status === 'All') {
            return true
          } else {
            return character.status === status
          }
        })
        .filter(character => gender === 'All' || character.gender === gender)
        .filter(character => {
          if(species === 'All') {
            return true
          } else {
            return character.species === species
          }
        })
        .filter(character => {
          let episodesGroup = '';
          if(character.episode.length === 1 ) {
            episodesGroup = 'one episode';
          } else if (character.episode.length <= 3) {
            episodesGroup = 'between one and three'
          }else {
            episodesGroup = 'more than three'
          }
          
          return episodes.findIndex(item => item === episodesGroup) >= 0 || episodes.length === 0
        })
        .map(character =>
          <li key={character.id} className="main__list__element">
            <Link className="main__link" to={`/detail/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          </li>
        )}
    </ol>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  findCharacter: PropTypes.string.isRequired
};

export default CharacterList;