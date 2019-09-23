import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
    const { character } = props
    return(
      <div className="main__list__container">
        <h2 className="main__list__element__name">{character.name}</h2>
        <div className="main__list__element__image-container">
            <img className="main__list__element__image" src={character.image} alt={character.name}/>
        </div>
        <p className="main__list__element__species">{character.species}</p>
      </div> 
    )
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterCard;