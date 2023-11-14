import React from 'react';
import pokemonList from './data';

import './App.css'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <>
   <Pokemon pokemon={pokemonList[0]} />
    </>
  )
}

export default App