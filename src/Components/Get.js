import React, { useState } from "react";
import styled from "styled-components";

const FetchList = styled.li`
    padding: 16px;
    border: 1px solid black;
    border-radius: 8px;
    outline-width: 0;
    font-size: 1rem;
    display: inline-block;
    width: 30vw;
    margin: 4px;
`;

const FetchButton = styled.button`
    margin: 25px;
    width: 300px;
    padding: 15px;
    border-radius: 10px;
    outline-width: 0;
    font-size: 1.5rem;
    font-weight: bolder;
    display: inline-block;
    background-color: rgb(100, 100, 100);
    color: white;
`;

const Get = () => {
    const [pokemons, setPokemons] = useState(null)

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=40&limit=964")
            .then(response => response.json())
            .then(response => setPokemons(response))
            .catch(error => console.log(error));
    };


    return (

        <div>
            <div>
                <FetchButton onClick={getPokemon}>Fetch Pokémon</FetchButton>
            </div>
            <br /><hr /><br />
            <div>
                <ul>
                    {pokemons ? pokemons.results.map((pokemon, i) => (
                        <FetchList key={i}>
                            {pokemon.name}
                        </FetchList>
                    )) : ''}

                </ul>
            </div>

        </div>

    );
};

export default Get;
