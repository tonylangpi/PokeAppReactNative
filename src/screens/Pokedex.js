import { SafeAreaView} from 'react-native'
import PokemonList from '../Components/PokemonList'
import { useState, useEffect } from 'react'
import {getPokemons, getPokemonDetails} from '../api/pokemon'

export default function Pokedex({navigation}){
  const [pokemons, setPokemons] = useState([])
  console.log(pokemons)
  useEffect(() => {
    (async()=>{
      await getPokemonsData()
    })()
  }, [])
  const getPokemonsData = async () => {
    try {
      const data = await getPokemons()
      const pokemonsArray = [];
      for await (const pokemon of data.results) { // for await of loop to wait for each pokemon to be fetched
         const pokemonData = await getPokemonDetails(pokemon.url)
         pokemonsArray.push({
            id: pokemonData.id,
            name: pokemonData.name,
            type: pokemonData.types[0].type.name,
            order: pokemonData.order,
            image: pokemonData.sprites.front_default
         })
      }
      setPokemons([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.log(error)
    }
  }
     console.log('Pokedex')
  return (
    <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
     <PokemonList pokemones={pokemons}/>
    </SafeAreaView>
  )
}
