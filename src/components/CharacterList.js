import React from 'react';
import './CharacterList.scss';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = props => {
    const { characters, findCharacter } = props
    return(
        <ul className="main__list">
            {characters
            .filter(myCharacter => myCharacter.name.toUpperCase().includes(findCharacter.toUpperCase()))
            .map(character =>
              <li key={character.id} className="main__list__element">
                <Link className="main__link" to={`/detail/${character.id}`}>
                  <CharacterCard character={character} />
                </Link>
               
              </li>
              )}
          </ul>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

export default CharacterList;