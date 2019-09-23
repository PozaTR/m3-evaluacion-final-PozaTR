import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    const { characters } = props
    return(
        <ul className="main__list">
            {characters.map(character =>
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