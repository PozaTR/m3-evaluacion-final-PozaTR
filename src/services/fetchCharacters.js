const endpoint = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const fetchCharacters = () => fetch(endpoint).then(response => response.json());

export { fetchCharacters }