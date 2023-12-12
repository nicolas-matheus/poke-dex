import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bulma/css/bulma.min.css';


const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const handleAddPokemon = (pokemon) => {
        const myPokemons = JSON.parse(localStorage.getItem('my_pokemons')) || [];
        myPokemons.push(pokemon);
        localStorage.setItem('my_pokemons', JSON.stringify(myPokemons));
        console.log(myPokemons)
    }; 

    useEffect(() => {
        const fetchPokemonList = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
            setPokemonList(response.data.results);
        };

        fetchPokemonList();
    }, []);

    return (
        <div>
            <h1 className='title is-2'>Lista de Pokémons</h1>
            <Link to={"/my-pokemons"}><button className='button is-primary'>Meus Pokemons</button></Link>
            <div className='columns is-multiline'>
                    {pokemonList.map((pokemon) => (
                    <div className='column is-one-fifth'>
                        <div className='card-image' key={pokemon.name}>
                            <figure className='image'>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)}.png`} alt={pokemon.name} />
                            </figure>
                                <div className='card-content'>
                                    <div className='media'>
                                        <div className='media-content'>
                                            <p>{pokemon.name}</p>
                                        </div> 
                                    </div>
                                </div>
                            <Link to={`/${pokemon.name}`}><button className='button is-link pr-6'>Detalhes</button></Link>
                            <button onClick={() => handleAddPokemon(pokemon)} className='button is-success ml-3'>+</button>
                        </div>  
                    </div>      
                     ))}

            </div>
        </div>
    );
};

export default PokemonList;