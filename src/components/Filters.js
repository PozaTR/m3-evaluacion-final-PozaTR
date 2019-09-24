import React from 'react';
import './Filters.scss';
import PropTypes from 'prop-types';

const Filters = props => {
  const { getCharacters, findCharacter, searchByGender, searchBySpecies, searchByEpisodes, searchByStatus, serchByOrigin } = props
  return (
    <div className="filters__container" >
      <label className="filters__label" htmlFor="name" ></label>
      <input className="filters__input" id="name" name="name" type="text" value={findCharacter} onChange={getCharacters} ></input>
      <select id="species" onChange={searchByGender}>
        <option value="All">All</option>
        <option value="Female" >Female</option>
        <option value="Male" >Male</option>
        <option value="unknown" >Unknown</option>
      </select>
      <div>
        <label htmlFor="all">
          <input onClick={searchBySpecies}
            id="all"
            type="radio"
            value="All"
            name="species"
          />
          All
        </label>
      </div>
      <div>
        <label htmlFor="human">
          <input onClick={searchBySpecies}
            id="human"
            type="radio"
            value="Human"
            name="species"
          />
          Humano
        </label>
      </div>
      <div>
        <label htmlFor="alien">
          <input onClick={searchBySpecies}
            id="alien"
            type="radio"
            value="Alien"
            name="species"
          />
          Alien
        </label>
      </div>
      <div>
        <label htmlFor="oneEpisode">
          <input onClick={searchByEpisodes}
            id="oneEpisode"
            type="checkbox"
            value="one episode"
            name="episodes"
          />
          One episode
        </label>
      </div>
      <div>
        <label htmlFor="lessThanThree">
          <input onClick={searchByEpisodes}
            id="lessThanThree"
            type="checkbox"
            value="between one and three"
            name="episodes"
          />
          Less than 3
        </label>
      </div>
      <div>
        <label htmlFor="moreThanThree">
          <input onClick={searchByEpisodes}
            id="moreThanThree"
            type="checkbox"
            value="more than three"
            name="episodes"
          />
          More than three
        </label>
      </div>
      <select onChange={searchByStatus}>
        <option name="status" value="All">All</option>
        <option name="status" value="Dead">Dead</option>
        <option name="status" value="Alive">Alive</option>
        <option name="status" value="unknown">unknown</option>
    </select>
    <div>
    <label htmlFor="all">All</label>
      <input 
        onClick={serchByOrigin}
        id="all"
        type="radio"
        value="All"
        name="origin"
      />
    </div>
    <div>
      <label htmlFor="earth(c-137)" >Earth (C-137)</label>
      <input 
        onClick={serchByOrigin}
        id="earth(c-137)"
        type="radio"
        value="Earth (C-137)"
        name="origin"
      />
    </div>
    <div>
      <label htmlFor="earth(replacementDimension">Earth (Replacement Dimension)</label>
      <input 
        onClick={serchByOrigin}
        id="earth(replacementDimension"
        type="radio"
        value="Earth (Replacement Dimension)"
        name="origin"
      />
    </div>
    <div>
      <label htmlFor="unknown">unknown</label>
      <input 
        onClick={serchByOrigin}
        id="unknown"
        type="radio"
        value="unknown"
        name="origin"
      />
    </div>
    </div>
  )
}

Filters.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  findCharacter: PropTypes.string.isRequired
}

export default Filters;