import type { Pokemon } from '~/types'
import { createStore, create } from 'zustand'

interface PokeProps {
  pokemon: Pokemon[]
}

interface PokeState extends PokeProps {
  setPokemon: (v: Pokemon[]) => void
}

type BearStore = ReturnType<typeof createBearStore>

export const createBearStore = (initProps?: Partial<PokeProps>) => {
  const DEFAULT_PROPS: PokeProps = {
    pokemon: [],
  }
  return createStore<PokeState>()(set => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setPokemon(v: Pokemon[]) {
      set({ pokemon: v })
    },
  }))
}

export const pokemonStore = create<PokeState>(set => ({
  pokemon: [],
  setPokemon(v: Pokemon[]) {
    set({ pokemon: v })
  },
}))
