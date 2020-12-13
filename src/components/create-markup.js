import { refs } from '../refs/refs.js';

const createMarkup = (country) => {
    if (country.length === 1) {
        const markup =
            `<h2 class="country-title">${country[0].name}</h2>
                <div class="content">
                    <div class="text-content">   
                        <p><b>Region: </b>${country[0].region}</p>  
                        <p><b>Population: </b>${country[0].population}</p>
                        <p><b>Capital: </b>${country[0].capital}</p>
                        <p><b>Languages:</b></p>
                            <ul>`+
            country[0].languages.reduce((acc, language) => {
                acc += `<li>${language.name}</li>`;
                return acc;
            }, '') +
            `</ul>
                    </div>
                        <img src="${country[0].flag}" alt="${country[0].name}'s flag" width="300">
                </div>`;

        return markup;
    } else if (country.length <= 10) {
        const markup =
            `
          <ul>` +
            country.reduce((acc, li) => {
                acc += `<li>${li.name}</li>`;
                return acc;
            }, '') +
            `</ul>
    `;
        return markup;
    }
};
export const clearMarkup = () => {
    refs.container.innerHTML = '';
};
export const updateMarkup = data => {
    const markup = createMarkup(data);
    refs.container.innerHTML = markup;
};