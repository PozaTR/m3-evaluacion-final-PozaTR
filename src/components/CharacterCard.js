import React from 'react';
import './CharacterCard.scss';
import PropTypes from 'prop-types';

const CharacterCard = props => {
    const { character } = props
    return(
      <div className="main__card__container">
        <h2 className="main__card__element__name">{character.name}</h2>
        <div className="main__card__element__image-container">
            <img className="main__card__element__image" src={character.image} alt={character.name}/>
        </div>
        <p className="main__card__element__species">{character.species}</p>
      </div> 
    )
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterCard;