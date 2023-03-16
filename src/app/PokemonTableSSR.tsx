import { store } from '~/store'
import PokemonTable from './PokemonTable'

export default function PokemonTableSSR() {
  return (
    <div>
      <h2>Server-side Table</h2>
      <PokemonTable pokemons={store.getState().pokemon} />
    </div>
  )
}
