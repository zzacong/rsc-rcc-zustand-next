'use client'

import { store } from '~/store'
import PokemonTable from './PokemonTable'

export default function PokemonTableCSR() {
  const pokemon = store(s => s.pokemon)

  return (
    <div>
      <h2>Client-side Table</h2>
      <PokemonTable pokemons={pokemon} />
    </div>
  )
}
