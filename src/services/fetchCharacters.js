const endpoint = 'https://rickandmortyapi.com/api/character/';

const fetchCharacters = () => fetch(endpoint).then(response => response.json());

export { fetchCharacters }