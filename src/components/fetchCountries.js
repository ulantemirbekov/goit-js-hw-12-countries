const fetchCountries = (searchQuery) => {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(data => data.json())
        .catch(error => console.log(error));
};
export default fetchCountries;