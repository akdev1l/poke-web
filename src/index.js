'use strict';

const API_BASE_URL = "http://poke-back.hq.akdev.xyz:8081";

const main = async () => {

    if(window.location.hash.length > 0) {
        const pokemonId = window.location.hash.substring(1);
        console.log(`fetching pokemon with id ${pokemonId}`);

        const requestUrl = `${API_BASE_URL}/pokemon/${pokemonId}`;
        console.log(requestUrl);
        const apiResponse = await fetch(requestUrl);
        console.log(apiResponse);
        const pokemonBody = await apiResponse.json();
        showPokemon(pokemonBody);

        console.log(`fetched pokemon: ${JSON.stringify(pokemonBody)}`);
    }
};
                
const showPokemon = (pokemon) => {
    const tableBody = document.querySelector("#table-body");

    tableBody.innerHTML = `
<tr>
    <td>${pokemon.id}</td>
    <td>${pokemon.identifier}</td>
    <td>${pokemon.species_id}</td>
    <td>${pokemon.height}</td>
</tr>
`;
    
};

main();
