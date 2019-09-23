import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = props => {
    const { characters } = props
    return(
        <ul className="main__list">
            {characters.map(character =>
              <li key={character.id} className="main__list__element">
                <h2 className="main__list__element__name">{character.name}</h2>
                <div className="main__list__element__image-container">
                  <img className="main__list__element__image" src={character.image} alt={character.name}/>
                </div>
                <p className="main__list__element__species">{character.species}</p>
              </li>
              )}
          </ul>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

export default CharacterList;