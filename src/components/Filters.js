import React from 'react';
import './Filters.scss';
import PropTypes from 'prop-types';

const Filters = props => {
  const { getCharacters, findCharacter, getByGender } = props
  return(
    <div className="filters__container" >
      <label className="filters__label" htmlFor="name" ></label>
      <input className="filters__input" id="name" name="name" type="text" value={findCharacter} onChange={getCharacters} ></input>
      <select onChange={getByGender} >
        <option value="All">All</option>
        <option value="Female">Female</option>
        <option value="Male" >Male</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  )
}

Filters.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  findCharacter: PropTypes.string.isRequired
}

export default Filters;