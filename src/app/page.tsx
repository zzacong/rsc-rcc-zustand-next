import type { Pokemon } from '~/types'
import { store } from '~/store'
import PokemonTableSSR from './PokemonTableSSR'
import PokemonTableCSR from './PokemonTableCSR'
import Loader from './Loader'

import styles from './pokemon.module.css'

export default async function PokemonPage() {
  const data: Pokemon[] = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  ).then(r => r.json())

  store.getState().setPokemon(data)

  return (
    <>
      <Loader pokemons={data} />
      <div>
        <h1>Server-side vs Client-side Zustand in Next.js 13 App dir</h1>
        <main className={styles.main}>
          <PokemonTableSSR />
          <PokemonTableCSR />
        </main>
      </div>
    </>
  )
}
