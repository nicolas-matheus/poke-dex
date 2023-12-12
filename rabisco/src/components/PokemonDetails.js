import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bulma/css/bulma.min.css';

const PokemonDetails = () => {
    const { name } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            setPokemonDetails(response.data);
        };

        fetchPokemonDetails();
    }, [name]);

    if (!pokemonDetails) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>Detalhes do Pokémon</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`} alt={pokemonDetails.name} />
            <p>Habilidade: {pokemonDetails.abilities[0].ability.name}</p>
            <p>Tipo: {pokemonDetails.types[0].type.name}</p>
            <Link to="/"><button className='button is-info'>Voltar</button></Link>
        </div>
    );
};

export default PokemonDetails;