import React from 'react';
import './Filters.scss';
import PropTypes from 'prop-types';


const Filters = props => {
  const { getCharacters, findCharacter } = props
  return(
    <div className="filters__container" >
      <label className="filters__label" htmlFor="name" >Elige tu personaje</label>
      <input className="filters__input" id="name" name="name" type="text" value={findCharacter} onChange={getCharacters} ></input>
    </div>
  )
}

Filters.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  findCharacter: PropTypes.string.isRequired
}

export default Filters;