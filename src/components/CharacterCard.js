import React from 'react';
import './CharacterCard.scss';
import PropTypes from 'prop-types';

const CharacterCard = props => {
    const { character } = props
    return(
      <div className="card">
        <div className="card__information" >
          <h2 className="card__information__name">{character.name}</h2>
          <p className="card__information__species">{character.species}</p>
        </div>
        <div className="card__container-image" style={{backgroundImage: `url(${character.image})`}}>
            <img className="card__image" src={character.image} alt={character.name}/>
        </div>
      </div> 
    )
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterCard;