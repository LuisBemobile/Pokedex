import React from 'react';
import pokemonList from './data';

import './App.css'
// import Pokemon from './components/Pokemon'
import Pokedex from './components/Pokedex';

function App() {
  return (
    <>
   <Pokedex pokemonList={pokemonList  }/>
   {/* <Pokemon pokemon={pokemonList[0]} /> */}
    </>
  )
}

export default App