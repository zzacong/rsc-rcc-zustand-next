'use client'

import { useRef } from 'react'
import { store } from '~/store'
import { Pokemon } from '~/types'

export default function Loader({ pokemons }: { pokemons: Pokemon[] }) {
  const loaded = useRef(false)
  if (!loaded.current) {
    store(s => s.setPokemon)(pokemons)
    loaded.current = true
  }

  return <></>
}
