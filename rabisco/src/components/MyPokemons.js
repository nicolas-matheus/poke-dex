import React from 'react';
import { Link, } from 'react-router-dom';
const MyPokemons = () => {
    const myPokemons = JSON.parse(localStorage.getItem('my_pokemons')) || [];
    
    return (
        <div>
            <h1 className='title is-2 pl-6'>Meus Pokémons</h1>
            <Link to="/"><button className='button is-info'>Voltar</button></Link>
                <div className='columns is-multiline'>
                    {myPokemons.map((pokemon) => (
                        <div className='column is-one-fifth'> 
                            <div key={pokemon.name} className='card-image'>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)}.png`} alt={pokemon.name} />
                                <div className='card-content'>
                                    <div className='media'>
                                        <div className='media-content'>
                                            <p>{pokemon.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/${pokemon.name}`}><button className='button is-link px-6'>Detalhes</button></Link>
                            </div> 
                        </div> 
                     ))}
                </div>
        </div>
    );
};

export default MyPokemons;