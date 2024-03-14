import {API_HOST} from '../utils/constanst'

export async function getPokemons(endpointUrl){
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`
    const response = await fetch(endpointUrl || url)
    const data = await response.json()
    return data
  } catch (error) {
     throw new Error('Error fetching pokemons')
  }
}

export async function getPokemonDetails(url){
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('Error fetching pokemon')
    }
 }

export async function getPokemonDetailsApi(id){
    try {
        const url = `${API_HOST}/pokemon/${id}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('Error fetching pokemon')
    }
}