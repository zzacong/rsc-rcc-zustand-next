import { type Pokemon } from '~/types'

export default function PokemonTable({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Name</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map(pokemon => (
          <tr key={pokemon.title}>
            <td>{pokemon.id}</td>
            <td>{pokemon.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
