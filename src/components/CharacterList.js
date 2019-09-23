import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    const { characters, findCharacter } = props
    return(
        <ul className="main__list">
            {characters
            .filter(myCharacter => myCharacter.name.toUpperCase().includes(findCharacter.toUpperCase()))
            .map(character =>
              <li key={character.id} className="main__list__element">
                <CharacterCard character={character} />
              </li>
              )}
          </ul>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

export default CharacterList;