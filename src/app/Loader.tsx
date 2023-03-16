'use client'

import type { Pokemon } from '~/types'
import { useRef } from 'react'
import { store } from '~/store'

export default function Loader({ pokemons }: { pokemons: Pokemon[] }) {
  const loaded = useRef(false)
  if (!loaded.current) {
    store(s => s.setPokemon)(pokemons)
    loaded.current = true
  }

  return <></>
}
