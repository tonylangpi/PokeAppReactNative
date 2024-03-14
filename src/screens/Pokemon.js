import {ScrollView, Pressable} from 'react-native'
import {useEffect, useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import {getPokemonDetailsApi} from '../api/pokemon'
import Header from '../Components/ComponentesPokemon/Header'
import Type from '../Components/ComponentesPokemon/Type'
import Stats from '../Components/ComponentesPokemon/Stats'

export default function Pokemon(props){
  const {navigation, route: {params}}  =props
  const [pokemonIndividual, setPokemonIndividual] = useState(null)


  useEffect(() => {
    (async()=>{
      try {
        const response =  await getPokemonDetailsApi(params.id)
        setPokemonIndividual(response)
      } catch (error) {
         navigation.goBack()
      }
    })()
  }, [params])
  if(!pokemonIndividual) return null
  return (
    <ScrollView 
    >
      <Pressable
        style={{
          position: 'absolute',
          top: 40,
          left: 40,
          zIndex: 1
        }}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="chevron-thin-left" size={24} color="black" />
      </Pressable>
      <Header 
        name={pokemonIndividual.name}
        order={pokemonIndividual.order}
        image={pokemonIndividual.sprites.other["official-artwork"].front_default}
        type={pokemonIndividual.types[0].type.name}
      />
      <Type types={pokemonIndividual.types}/>
      <Stats stats={pokemonIndividual.stats}/>
      
    </ScrollView>
  )
}
