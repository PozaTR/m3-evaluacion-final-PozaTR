import React from 'react';
import './CharacterDetail.scss'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  const { characters, match } = props;
  const characterId = parseInt(match.params.characterId);



  const characterFind = characters.filter(character => character.id === characterId);

  if(characterFind[0]) {
    const { name, image, species, origin, episode, status} = characterFind[0];
    return(
      <div className="detail__container">
        <div className="detail__card" >
          <div className="detail__card__container-image" >
            <img calssName="detail__card__image" src={image} alt={name} />
          </div>
          <div className="detail__card__information" >
            <h2 className="detail__card__information__name" >{name}</h2>
            <p className="detail__card__information__species" >{`species:${species}`}</p>
            <p className="detail__card__information__origin" >{`origin:${origin.name}`}</p>
            <p className="detail__card__information__episodes" >{`episodes:${episode.length}`}</p>
            <p className="detail__card__information__status" >{`status: ${status}`}</p>
          </div>
        </div>
        <Link to="/">Back</Link>
      </div>
     
    )
  } else {
    return(
      <div>Ese personaje no existe</div>
    )
  }
}

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CharacterDetail

