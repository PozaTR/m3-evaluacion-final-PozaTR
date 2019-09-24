import React from 'react';
import './CharacterDetail.scss'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  const { characters, match } = props;
  const characterId = parseInt(match.params.characterId);
  const characterFind = characters.find(character => character.id === characterId);

  if (characterFind) {
    const { name, image, species, origin, episode, status } = characterFind;
    return (
      <div className="detail__container">
        <Link className="detail__link" to="/">Volver</Link>
        <div className="detail__card" >
          <div className="detail__card__container-image" style={{ backgroundImage: `url(${image})` }}>
            <img className="detail__card__image" src={image} alt={name} />
          </div>
          <div className="detail__card__information" >
            <h2 className="detail__card__information__name" >{name}</h2>
            <p className="detail__card__information__status" >{`status: ${status}`} {(status === 'Dead') ? <i className="fas fa-skull-crossbones"></i> : ''}</p>
            <p className="detail__card__information__species" >{`species:${species}`} {(species === 'Alien') ? <i className="fab fa-reddit-alien"></i> : <i className="fas fa-user"></i>}</p>
            <p className="detail__card__information__origin" >{`origin:${origin.name}`}</p>
            <p className="detail__card__information__episodes" >{`episodes:${episode.length}`}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <React.Fragment>
        <Link className="detail__link" to="/">Volver</Link>
        <div>Ese personaje no existe</div>
      </React.Fragment>
    )
  }
}

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object.isRequired
}

export default CharacterDetail;

