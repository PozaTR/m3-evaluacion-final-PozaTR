import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = props => {
  const { characters, match } = props;
  const characterId = parseInt(match.params.characterId);



  const characterFind = characters.filter(character => character.id === characterId);

  if(characterFind[0]) {
    const { name, image, species, origin, episode, status} = characterFind[0];
    return(
      <div className="detail__container">
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{`species:${species}`}</p>
          <p>{`origin:${origin.name}`}</p>
          <p>{`episodes:${episode.length}`}</p>
          <p>{`status: ${status}`}</p>
        </div>
      </div>
    )
  } else {
    return(
      <div>Vuelve a tu casa</div>
    )
  }
}

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CharacterDetail

